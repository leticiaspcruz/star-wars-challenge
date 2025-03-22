import { useRouter } from 'next/router';
import { Button, Text, Container, Loader, Banner, Error } from '@/components';
import { Planet } from '@/interfaces/swapi';
import { usePlanets } from '@/hooks';
import { BANNERS } from '@/constants/banners';
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
  if (error) return <Error errorText='Oops! An error occurred, please try again later' />;;
  if (!planet) return <Text>Planet not found.</Text>;

  return (
    <>
    <Banner
        pageName={BANNERS.planets.pageName}
        pageDescription={BANNERS.planets.pageDescription}
        finalText={BANNERS.planets.pageName}
    />
    <Container>
      <Text variant='subheading' weight='bold' align='center'>Planet Details</Text>
      <S.InfoWrapper>
      {renderPlanetInfo(planet)}
      <Button onClick={() => router.push('/planets')}>Go back to Planets page</Button>
      </S.InfoWrapper>
    </Container>
    </>
  );
};

export default PlanetDetailsPage;
