import { useState, useEffect, useRef, useCallback } from 'react';
import getPlanets from '@/services/getPlanets';
import { Planet } from '@/interfaces/swapi';

type CacheKey = `${string}-${number}`;
type CacheValue = { results: Planet[]; count: number };

const usePlanets = (searchTerm: string = '', page: number = 1, id?: string) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);

  const listCache = useRef<Record<CacheKey, CacheValue>>({});
  const detailCache = useRef<Record<string, Planet>>({});
  const key: CacheKey = `${searchTerm}-${page}`;

  const fetchPlanets = useCallback(async () => {
    if (id) {
      if (detailCache.current[id]) {
        setPlanet(detailCache.current[id]);
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        if (!response.ok) throw new Error('Error fetching planet');
        const data: Planet = await response.json();
        detailCache.current[id] = data;
        setPlanet(data);
      } catch (err) {
        console.error('Error fetching planets:', err);
        setError('Error fetching planets.');
      } finally {
        setIsLoading(false);
      }
    } else {
      if (listCache.current[key]) {
        const cachedData = listCache.current[key];
        setPlanets(cachedData.results);
        setTotalPages(Math.ceil(cachedData.count / 10));
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const data = await getPlanets(searchTerm, page);
        listCache.current[key] = data;

        setPlanets(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error('Error fetching planets:', error);
        setError('Error fetching planets.');
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }
  }, [searchTerm, page, key, id]);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return { planets, planet, isLoading, error, totalPages };
};

export default usePlanets;
