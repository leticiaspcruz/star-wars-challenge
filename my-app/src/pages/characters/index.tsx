import { useState, useMemo } from 'react';
import { useCharacters } from '@/hooks';
import { SearchInput, SectionList, Breadcrumb, Container, Banner, CharacterFilters } from '@/components';
import BannerCharacters from '@/assets/characters-banner.jpg';
import { FiltersCharacters } from '@/interfaces/filters';

export default function CharactersPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [characterPage, setCharacterPage] = useState<number>(1);
  const [filters, setFilters] = useState<FiltersCharacters>({
    name: '',
    gender: '',
    height: '',
    mass: '',
    hair_color: '',
    eye_color: '',
  });

  const { characters, isLoading, error, totalPages } = useCharacters(searchTerm, characterPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCharacterPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCharacterPage(newPage);
  };

  const handleChangeFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCharacterPage(1); 
  };

  const filteredCharacters = useMemo(() => {
    return characters.filter(character => {
      const matchName = filters.name
        ? character.name.toLowerCase().includes(filters.name.toLowerCase())
        : true;
      const matchGender = filters.gender ? character.gender === filters.gender : true;
      const matchHairColor = filters.hair_color ? character.hair_color === filters.hair_color : true;

      const characterHeight = Number(character.height);
      const matchHeight = filters.height
        ? (filters.height === 'short' && characterHeight < 150) ||
          (filters.height === 'medium' && characterHeight >= 150 && characterHeight <= 180) ||
          (filters.height === 'tall' && characterHeight > 180)
        : true;

      const matchMass = filters.mass
        ? character.mass.toLowerCase().includes(filters.mass.toLowerCase())
        : true;

      return matchName && matchGender && matchHairColor && matchHeight && matchMass;
    });
  }, [characters, filters]);

  const breadcrumbItems = [
    { name: 'home', href: '/' },
    { name: 'personagens', href: '/characters' },
  ];

  return (
    <>
      <Banner imageUrl={BannerCharacters} altText="Personagens" text="Personagens" />
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <SearchInput onSearch={handleSearch} placeholder="Buscar personagem..." />

        <CharacterFilters 
          onChangeFilters={handleChangeFilters} 
          currentFilters={filters}
          characters={characters}
        />

        <SectionList
          items={filteredCharacters}
          isLoading={isLoading}
          isError={error}
          currentPage={characterPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemType="character"
          useTitle={false}
        />
      </Container>
    </>
  );
}
