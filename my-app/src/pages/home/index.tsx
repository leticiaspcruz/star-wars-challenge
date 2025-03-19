import { useState } from 'react';
import { useCharacters, usePlanets } from '@/hooks';
import { SearchInput, SectionList, Container } from '@/components';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchType, setSearchType] = useState<'characters' | 'planets' | undefined>(undefined);
  
  const [characterPage, setCharacterPage] = useState<number>(1);
  const { characters, isLoading: isCharactersLoading, error: charactersError, totalPages: characterTotalPages } = useCharacters(searchTerm, characterPage);
  
  const [planetPage, setPlanetPage] = useState<number>(1);
  const { planets, isLoading: isPlanetsLoading, error: planetsError, totalPages: planetTotalPages } = usePlanets(searchTerm, planetPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCharacterPage(1);
    setPlanetPage(1);
    
    if (term.toLowerCase().includes('planeta')) {
      setSearchType('planets');
    } else {
      setSearchType('characters');
    }
  };

  const handleCharactersPageChange = (newPage: number) => {
    setCharacterPage(newPage);
  };

  const handlePlanetsPageChange = (newPage: number) => {
    setPlanetPage(newPage);
  };

  return (
    <Container>
      <SearchInput onSearch={handleSearch} placeholder="Buscar personagem ou planeta" />
      
      {(searchType === 'characters' || searchType === undefined) && (
        <SectionList 
          items={characters}
          isLoading={isCharactersLoading}
          isError={charactersError}
          currentPage={characterPage}
          totalPages={characterTotalPages}
          onPageChange={handleCharactersPageChange}
          itemType="Personagens"
        />
      )}

      {(searchType === 'planets' || searchType === undefined) && (
        <SectionList 
          items={planets}
          isLoading={isPlanetsLoading}
          isError={planetsError}
          currentPage={planetPage}
          totalPages={planetTotalPages}
          onPageChange={handlePlanetsPageChange}
          itemType="Planetas"
        />
      )}
    </Container>
  );
}
