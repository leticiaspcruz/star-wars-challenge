import { useState, useCallback } from 'react';
import { useCharacters, usePlanets } from '@/hooks';
import { SearchInput, SectionList, Container, Banner } from '@/components';
import { BANNERS } from '@/constants/banners';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [planetPage, setPlanetPage] = useState<number>(1);
  const [characterPage, setCharacterPage] = useState<number>(1);

  const { characters, isLoading: isCharactersLoading, error: charactersError, totalPages: characterTotalPages } = useCharacters(searchTerm, characterPage);
  const { planets, isLoading: isPlanetsLoading, error: planetsError, totalPages: planetTotalPages } = usePlanets(searchTerm, planetPage);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setCharacterPage(1);
    setPlanetPage(1);
  }, []);

  const handlePageChange = (newPage: number) => {
    if (characterPage) {
      setCharacterPage(newPage);
    }

    if (planetPage) {
      setPlanetPage(newPage);
    }
  };

  const isLoading = isCharactersLoading || isPlanetsLoading;
  const isError = charactersError || planetsError;

  const combinedArray = [
    ...characters,
    ...planets
  ]

  const currentPage = characterPage || planetPage;
  const totalPages = characterTotalPages +  planetTotalPages;

  return (
    <>
      <Banner
        pageName={BANNERS.homepage.pageName}
        pageDescription={BANNERS.homepage.pageDescription}
        finalText={BANNERS.homepage.pageName}
      />
      <Container>
        <SearchInput onSearch={handleSearch} placeholder="Find characters or planets" />

            <SectionList
            items={combinedArray}
            isLoading={isLoading}
            isError={isError}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemType='mixed'
            />
      </Container>
    </>
  );
}

export default Home;
