import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleRedirectToCharacters = () => {
    router.push('/characters');
  };

  const handleRedirectToPlanets = () => {
    router.push('/planets');
  };

  return (
    <div>
      <h1>Bem-vindo à Star Wars App</h1>
        <button onClick={handleRedirectToCharacters}>Ir para Personagens</button>
        <button onClick={handleRedirectToPlanets}>
          Ir para Planetas
        </button>
    </div>
  );
}
