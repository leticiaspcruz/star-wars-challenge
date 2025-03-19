import { useState } from 'react';
import { SearchInput, SectionList } from '@/components';
import { usePlanets } from '@/hooks';

export default function PlanetsPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [planetPage, setPlanetPage] = useState<number>(1);
  const { planets, isPlanetsLoading, isError: planetsError, totalPages: planetTotalPages } = usePlanets(searchTerm, planetPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPlanetPage(1); 
  };

  const handlePageChange = (newPage: number) => {
    setPlanetPage(newPage);
  };

  return (
      <section>
        <SearchInput onSearch={handleSearch} placeholder="Buscar planeta..." />
        <SectionList 
          items={planets}
          isLoading={isPlanetsLoading}
          isError={planetsError}
          currentPage={planetPage}
          totalPages={planetTotalPages}
          onPageChange={handlePageChange}
          itemType="Planetas"
        />
      </section>
  );
}
