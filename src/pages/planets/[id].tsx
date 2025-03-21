import { useRouter } from 'next/router';
import { Button, Text, Container, Loader, Banner, Error } from '@/components';
import { Planet } from '@/interfaces/swapi';
import { usePlanets } from '@/hooks';
import { BannerPlanets } from '@/assets';
import * as S from '@/shared/pagesStyles';

const PlanetDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { planet, isLoading, error } = usePlanets('', 1, id as string);

    const renderPlanetInfo = (planet: Planet) => (
       <>
        {planet.name && <Text weight="bold">{planet.name}</Text>}
        {planet.rotation_period && <Text>Rotation Period: {planet.rotation_period} hours</Text>}
        {planet.orbital_period && <Text>Orbital Period: {planet.orbital_period} days</Text>}
        {planet.diameter && <Text>Diameter: {planet.diameter} km</Text>}
        {planet.climate && <Text>Climate: {planet.climate}</Text>}
        {planet.gravity && <Text>Gravity: {planet.gravity}</Text>}
        {planet.terrain && <Text>Terrain: {planet.terrain}</Text>}
        {planet.population && <Text>Population: {planet.population}</Text>}
       </>
     );

  if (isLoading) return <Loader />;
  if (error) return <Error errorText='Ops! Ocorreu um erro, tente novamente mais tarde.' />;;
  if (!planet) return <Text>Planeta não encontrado.</Text>;
  
  return (
    <>
    <Banner
    imageUrl={BannerPlanets}
    altText="Detalhe do planeta"
    text="Detalhe do planeta"
    />
    <Container>
      <Text variant='subheading' weight='bold' align='center'>Detalhes do Planeta</Text>
      <S.InfoWrapper>
      {renderPlanetInfo(planet)}
      <Button onClick={() => router.push('/characters')}>Voltar para a lista</Button>
      </S.InfoWrapper>
    </Container>
    </>
  );
};

export default PlanetDetailsPage;
