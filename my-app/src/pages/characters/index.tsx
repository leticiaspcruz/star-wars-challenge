import { useState } from 'react';
import { useCharacters } from '@/hooks';
import { SearchInput } from '@/components';

export default function CharactersPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [characterPage, setCharacterPage] = useState<number>(1);
  
  const { characters, isCharactersLoading, isError: charactersError, totalPages: characterTotalPages } = useCharacters(searchTerm, characterPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCharacterPage(1);
  };

  return (
    <div>
      <h1>Characters</h1>
      <section>
        <h2>Personagens</h2>
        <SearchInput onSearch={handleSearch} placeholder="Buscar personagem..." />
        
        {isCharactersLoading && <p>Carregando personagens...</p>}
        {charactersError && <p>{charactersError}</p>}
        
        <ul>
          {characters.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
        
        <div>
          <button onClick={() => setCharacterPage((prev) => Math.max(prev - 1, 1))} disabled={characterPage === 1}>
            Anterior
          </button>
          <span>Página {characterPage} de {characterTotalPages}</span>
          <button onClick={() => setCharacterPage((prev) => Math.min(prev + 1, characterTotalPages))} disabled={characterPage === characterTotalPages}>
            Próxima
          </button>
        </div>
      </section>
    </div>
  );
}