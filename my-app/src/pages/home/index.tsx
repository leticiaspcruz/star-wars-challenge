import { SwitchTheme } from '@/components';
import { useCharacters, usePlanets } from '@/hooks';

export default function Home() {
  const { characters, isCharactersLoading, isError: charactersError } = useCharacters();
  const { planets, isPlanetsLoading, isError: planetsError } = usePlanets();

  console.log('characters --', characters, isCharactersLoading, charactersError);
  console.log('planets --',  planets, isPlanetsLoading, planetsError);

  return (
    <div>
      <h1>Bem-vindo à Star Wars App</h1>
      <SwitchTheme />
    </div>
  );
}
