import { useState, useEffect, useRef, useCallback } from 'react';
import getCharacters from '@/services/getCharacters';
import { Character } from '@/interfaces/swapi';

type CacheKey = `${string}-${number}`;
type CacheValue = { results: Character[]; count: number };

const useCharacters = (searchTerm: string = '', page: number = 1, id?: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);

  const listCache = useRef<Record<CacheKey, CacheValue>>({});
  const detailCache = useRef<Record<string, Character>>({});
  const key: CacheKey = `${searchTerm}-${page}`;

  const fetchCharacters = useCallback(async () => {
    if (id) {
      if (detailCache.current[id]) {
        setCharacter(detailCache.current[id]);
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        if (!response.ok) throw new Error('Erro ao buscar personagem');
        const data: Character = await response.json();
        detailCache.current[id] = data;
        setCharacter(data);
      } catch (err) {
        console.error('Erro ao buscar personagem:', err);
        setError('Erro ao buscar personagem.');
      } finally {
        setIsLoading(false);
      }
    } else {
      if (listCache.current[key]) {
        const cachedData = listCache.current[key];
        setCharacters(cachedData.results);
        setTotalPages(Math.ceil(cachedData.count / 10));
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const data = await getCharacters(searchTerm, page);
        listCache.current[key] = data;

        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError('Erro ao buscar dados.');
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }
  }, [searchTerm, page, key, id]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { characters, character, isLoading, error, totalPages };
};

export default useCharacters;
