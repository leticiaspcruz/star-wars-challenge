import { useState, useEffect, useRef, useCallback } from 'react';
import getFilms, { getFilmById } from '@/services/getFilms';
import { Film } from '@/interfaces/swapi';

const useFilms = (id?: string) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [film, setFilm] = useState<Film | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const listCache = useRef<Record<string, Film[]>>({});
  const detailCache = useRef<Record<string, Film>>({});

  const fetchFilms = useCallback(async () => {
    if (id) {
      if (detailCache.current[id]) {
        setFilm(detailCache.current[id]);
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const data = await getFilmById(id);
        detailCache.current[id] = data;
        setFilm(data);
      } catch (err) {
        console.error('Erro ao buscar filme:', err);
        setError('Erro ao buscar filme.');
      } finally {
        setIsLoading(false);
      }
    } else {
      if (listCache.current['all']) {
        setFilms(listCache.current['all']);
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const data = await getFilms();
        listCache.current['all'] = data.results;
        setFilms(data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        setError('Erro ao buscar filmes.');
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return { films, film, isLoading, error };
};

export default useFilms;
