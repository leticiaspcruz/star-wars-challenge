import { useRouter } from 'next/router';
import { useFilms } from '@/hooks';
import { Button, Text, Container, Loader, Banner } from '@/components';
import BannerHome from '@/assets/home-banner.jpg';
import Image from 'next/image';
import FilmOne from '@/assets/filme1.jpg';
import * as S from './styles';

const FilmDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { film, isLoading, error } = useFilms(id as string);

  if (isLoading) return <Loader />;
  if (error) return <Text>{error}</Text>; 

  const renderFilmInfo = () => {
    if (film) {
      return (
        <>
          {film.title && <Text weight="bold">{film.title}</Text>}
          <S.ImageContainer>
            <Image
                src={FilmOne}
                alt='Poster do filme'
                width='250'
                height='350'
                loading="lazy"
              />
          </S.ImageContainer>
          {film.opening_crawl && <Text>Opening Crawl: {film.opening_crawl}</Text>}
          {film.director && <Text>Director: {film.director}</Text>}
          {film.producer && <Text>Producer: {film.producer}</Text>}
          {film.release_date && <Text>Release Date: {film.release_date}</Text>}
          <Button onClick={() => router.push('/')}>Voltar para a home</Button>
        </>
      );
    }
  };

  return (
    <>
      <Banner
        imageUrl={BannerHome}
        altText="Detalhes do filme"
        text="Detalhes do Filme"
      />
      <Container>
        <Text variant="subheading" weight="bold" align="center">
          Detalhes do Filme:
        </Text>
          <S.InfoWrapper>{renderFilmInfo()}</S.InfoWrapper>
      </Container>
    </>
  );
};

export default FilmDetailsPage;
