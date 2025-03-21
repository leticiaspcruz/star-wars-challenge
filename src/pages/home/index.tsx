import { useState } from 'react';
import { useCharacters } from '@/hooks';
import { SearchInput, SectionList, Container, Banner } from '@/components';
import BannerHome from '@/assets/home-banner.jpg';

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
    <>
    <Banner
      imageUrl={BannerHome}
      altText="Star Wars Challenge"
      text="Bem-vindo(a) ao Star Wars Challenge!"
    />
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
    </>
  );
}
