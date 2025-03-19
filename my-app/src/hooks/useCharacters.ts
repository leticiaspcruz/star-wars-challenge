import { useState, useEffect } from 'react';
import { getCharacters } from '@/services';
import { Character } from '@/interfaces/swapi';

const useCharacters = (searchTerm: string = '') => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isCharactersLoading, setIsCharactersLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsCharactersLoading(true);
      setIsError('');

      try {
        const fetchedCharacters = await getCharacters(searchTerm);
        setCharacters(fetchedCharacters);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setIsError('Erro ao buscar dados.');
      } finally {
        setIsCharactersLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { characters, isCharactersLoading, isError };
};

export default useCharacters;
