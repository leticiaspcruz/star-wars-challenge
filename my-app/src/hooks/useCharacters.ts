import { useState, useEffect } from 'react';
import getCharacters from '@/services/getCharacters';
import { Character } from '@/interfaces/swapi';

const useCharacters = (searchTerm: string = '', page: number = 1) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isCharactersLoading, setIsCharactersLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsCharactersLoading(true);
      setIsError('');

      try {
        const data = await getCharacters(searchTerm, page);
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setIsError('Erro ao buscar dados.');
      } finally {
        setIsCharactersLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, page]);

  return { characters, isCharactersLoading, isError, totalPages };
};

export default useCharacters;
