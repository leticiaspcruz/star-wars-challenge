import { useState } from 'react';
import { useCharacters } from '@/hooks';
import { SearchInput, SectionList, Container } from '@/components';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const [characterPage, setCharacterPage] = useState<number>(1);
  const { characters, isLoading: isCharactersLoading, error: charactersError, totalPages: characterTotalPages } = useCharacters(searchTerm, characterPage);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCharacterPage(1);
  };

  const handleCharactersPageChange = (newPage: number) => {
    setCharacterPage(newPage);
  };

  return (
    <Container>
      <SearchInput onSearch={handleSearch} placeholder="Buscar personagem ou planeta" />
        <SectionList 
          items={characters}
          isLoading={isCharactersLoading}
          isError={charactersError}
          currentPage={characterPage}
          totalPages={characterTotalPages}
          onPageChange={handleCharactersPageChange}
          itemType='character'
          useTitle={false}
        />
    </Container>
  );
}
