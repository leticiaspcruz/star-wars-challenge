import { useState } from 'react';
import { useCharacters } from '@/hooks';
import { SearchInput, SectionList, Breadcrumb, Container, Banner } from '@/components';
import BannerCharacters from '@/assets/characters-banner.jpg';

export default function CharactersPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [characterPage, setCharacterPage] = useState<number>(1);
  const { characters, isLoading: isCharactersLoading, error: charactersError, totalPages: characterTotalPages } = useCharacters(searchTerm, characterPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCharacterPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCharacterPage(newPage);
  };

  const breadcrumbItems = [
    { name: 'home', href: '/' },
    { name: 'personagens', href: '/characters' },
  ]

  return (
   <>
      <Banner
      imageUrl={BannerCharacters}
      altText="Personagens"
      text="Personagens"
      />
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <SearchInput onSearch={handleSearch} placeholder="Buscar personagem..." />
        <SectionList 
          items={characters}
          isLoading={isCharactersLoading}
          isError={charactersError}
          currentPage={characterPage}
          totalPages={characterTotalPages}
          onPageChange={handlePageChange}
          itemType='character'
          useTitle={false}
        />
      </Container>
   </>
  );
}