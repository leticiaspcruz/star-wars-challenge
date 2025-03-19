import { useState, useEffect, useRef, useCallback } from 'react';
import getCharacters from '@/services/getCharacters';
import { Character } from '@/interfaces/swapi';

type CacheKey = `${string}-${number}`;
type CacheValue = { results: Character[]; count: number };

const useCharacters = (searchTerm: string = '', page: number = 1) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);

  const cache = useRef<Record<CacheKey, CacheValue>>({});
  const key: CacheKey = `${searchTerm}-${page}`;

  const fetchCharacters = useCallback(async () => {
    if (cache.current[key]) {
      const cachedData = cache.current[key];
      setCharacters(cachedData.results);
      setTotalPages(Math.ceil(cachedData.count / 10));
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const data = await getCharacters(searchTerm, page);
      cache.current[key] = data;

      setCharacters(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setError('Erro ao buscar dados.');
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [searchTerm, page, key]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { characters, isLoading, error, totalPages };
};

export default useCharacters;
