import { useState, useEffect } from 'react';
import getPlanets from '@/services/getPlanets';
import { Planet } from '@/interfaces/swapi';

const usePlanets = (searchTerm: string = '', page: number = 1) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isPlanetsLoading, setIsPlanetsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsPlanetsLoading(true);
      setIsError('');

      try {
        const data = await getPlanets(searchTerm, page);
        setPlanets(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setIsError('Erro ao buscar dados.');
      } finally {
        setIsPlanetsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, page]);

  return { planets, isPlanetsLoading, isError, totalPages };
};

export default usePlanets;
