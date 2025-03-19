import { useState } from 'react';
import { SearchInput } from '@/components';
import { usePlanets } from '@/hooks';

export default function PlanetsPage() {
  const [planetPage, setPlanetPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { planets, isPlanetsLoading, isError: planetsError, totalPages: planetTotalPages } = usePlanets(searchTerm, planetPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPlanetPage(1); 
  };

  return (
    <div>
      <h1>Planets</h1>
      <section>
        <h2>Planetas</h2>
        <SearchInput onSearch={handleSearch} placeholder="Buscar planeta..." />
        
        {isPlanetsLoading && <p>Carregando planetas...</p>}
        {planetsError && <p>{planetsError}</p>}
        
        <ul>
          {planets.map((planet) => (
            <li key={planet.name}>{planet.name}</li>
          ))}
        </ul>
        
        <div>
          <button onClick={() => setPlanetPage((prev) => Math.max(prev - 1, 1))} disabled={planetPage === 1}>
            Anterior
          </button>
          <span>Página {planetPage} de {planetTotalPages}</span>
          <button onClick={() => setPlanetPage((prev) => Math.min(prev + 1, planetTotalPages))} disabled={planetPage === planetTotalPages}>
            Próxima
          </button>
        </div>
      </section>
    </div>
  );
}
