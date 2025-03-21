import { useState } from 'react';
import { useCharacters, usePlanets } from '@/hooks';
import { SearchInput, SectionList, Container, Banner } from '@/components';
import { BannerHome } from '@/assets';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [planetPage, setPlanetPage] = useState<number>(1);
  const [characterPage, setCharacterPage] = useState<number>(1);

  const { characters, isLoading: isCharactersLoading, error: charactersError, totalPages: characterTotalPages } = useCharacters(searchTerm, characterPage);
  const { planets, isLoading: isPlanetsLoading, error: planetsError, totalPages: planetTotalPages } = usePlanets(searchTerm, planetPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCharacterPage(1);
    setPlanetPage(1);
  };

  const handleCharactersPageChange = (newPage: number) => {
    setCharacterPage(newPage);
  };

  const handlePlanetsPageChange = (newPage: number) => {
    setPlanetPage(newPage);
  };

  return ( 
    <>
      <Banner
        imageUrl={BannerHome}
        altText="Star Wars Challenge"
        text="Welcome to the Star Wars Challenge!"
      />
      <Container>
        <SearchInput onSearch={handleSearch} placeholder="Find characters or planets" />
        
        {characters && 
            <SectionList 
            items={characters}
            isLoading={isCharactersLoading}
            isError={charactersError}
            currentPage={characterPage}
            totalPages={characterTotalPages}
            onPageChange={handleCharactersPageChange}
            itemType='character'
            />
        }

        {planets && 
          <SectionList 
          items={planets}
          isLoading={isPlanetsLoading}
          isError={planetsError}
          currentPage={planetPage}
          totalPages={planetTotalPages}
          onPageChange={handlePlanetsPageChange}
          itemType='planet'
          />
        }
      </Container>
    </>
  );
}

export default Home;
