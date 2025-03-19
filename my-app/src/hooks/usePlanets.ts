import { useState, useEffect, useRef, useCallback } from 'react';
import getPlanets from '@/services/getPlanets';
import { Planet } from '@/interfaces/swapi';

type CacheKey = `${string}-${number}`;
type CacheValue = { results: Planet[]; count: number };

const usePlanets = (searchTerm: string = '', page: number = 1) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);

  const cache = useRef<Record<CacheKey, CacheValue>>({});
  const key: CacheKey = `${searchTerm}-${page}`;

  const fetchPlanets = useCallback(async () => {
    if (cache.current[key]) {
      const cachedData = cache.current[key];
      setPlanets(cachedData.results);
      setTotalPages(Math.ceil(cachedData.count / 10));
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const data = await getPlanets(searchTerm, page);
      cache.current[key] = data;
      setPlanets(data.results);
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
    fetchPlanets();
  }, [fetchPlanets]);

  return { planets, isLoading, error, totalPages };
};

export default usePlanets;
