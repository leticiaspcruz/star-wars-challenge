import { useState, useEffect } from 'react';
import { getPlanets } from '@/services';
import { Planet } from '@/interfaces/swapi';

const usePlanets = (searchTerm: string = '') => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isPlanetsLoading, setIsPlanetsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsPlanetsLoading(true);
      setIsError('');

      try {
        const fetchedPlanets = await getPlanets(searchTerm);
        setPlanets(fetchedPlanets);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setIsError('Erro ao buscar dados.');
      } finally {
        setIsPlanetsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { planets, isPlanetsLoading, isError };
};

export default usePlanets;
