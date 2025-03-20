import { useState, useMemo } from 'react';
import { SearchInput, SectionList, Breadcrumb, Container, Banner, PlanetsFilters } from '@/components';
import { usePlanets } from '@/hooks';
import BannerPlanets from '@/assets/planets.jpg';
import { Planet } from '@/interfaces/swapi';

export default function PlanetsPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [planetPage, setPlanetPage] = useState<number>(1);
  const [filters, setFilters] = useState<Partial<Planet>>({});

  const { planets, isLoading: isPlanetsLoading, error: planetsError, totalPages: planetTotalPages } = usePlanets(searchTerm, planetPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPlanetPage(1); 
  };

  const handlePageChange = (newPage: number) => {
    setPlanetPage(newPage);
  };

  const handleFilterChange = (newFilters: Partial<Planet>) => {
    setFilters(newFilters);
    setPlanetPage(1);
  };

  const filteredPlanets = useMemo(() => {
    return planets.filter(planet => {
      const matchName = filters.name
        ? planet.name.toLowerCase().includes(filters.name.toLowerCase())
        : true;
      const matchClimate = filters.climate
        ? planet.climate.toLowerCase().includes(filters.climate.toLowerCase())
        : true;
      const matchTerrain = filters.terrain
        ? planet.terrain.toLowerCase().includes(filters.terrain.toLowerCase())
        : true;
      const matchPopulation = filters.population
        ? planet.population.toLowerCase().includes(filters.population.toLowerCase())
        : true;
      const matchDiameter = filters.diameter
        ? planet.diameter.toLowerCase().includes(filters.diameter.toLowerCase())
        : true;

      return matchName && matchClimate && matchTerrain && matchPopulation && matchDiameter;
    });
  }, [planets, filters]);

  const breadcrumbItems = [
    { name: 'home', href: '/' },
    { name: 'planetas', href: '/planets' },
  ];

  return (
    <>
      <Banner
        imageUrl={BannerPlanets}
        altText="Planetas"
        text="Planetas"
      />
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <SearchInput onSearch={handleSearch} placeholder="Buscar planeta..." />
        
        <PlanetsFilters 
          onChangeFilters={handleFilterChange}
          currentFilters={filters}
          planets={planets}
        />

        <SectionList 
          items={filteredPlanets}
          isLoading={isPlanetsLoading}
          isError={planetsError}
          currentPage={planetPage}
          totalPages={planetTotalPages}
          onPageChange={handlePageChange}
          itemType='planet'
          useTitle={false}
        />
      </Container>
    </>
  );
}
