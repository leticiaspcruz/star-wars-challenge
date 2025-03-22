import { useRouter } from 'next/router';
import { useFilms } from '@/hooks';
import { Button, Text, Container, Loader, Banner, Error } from '@/components';
import { BANNERS } from '@/constants/banners';
import Image, { StaticImageData } from "next/legacy/image";
import { formatDate } from '@/utils/formatDate';
import { FilmOne, FilmTwo, FilmThree, FilmFour, FilmFive, FilmSix } from '@/assets';
import * as S from '@/shared/pagesStyles';

const filmImages: { [key: string]: StaticImageData } = {
  '1': FilmOne,
  '2': FilmTwo,
  '3': FilmThree,
  '4': FilmFour,
  '5': FilmFive,
  '6': FilmSix,
};

const FilmDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { film, isLoading, error } = useFilms(id as string);

  if (isLoading) return <Loader />;
  if (error) return <Error errorText='Oops! An error occurred, please try again later.' />;;

  const renderFilmInfo = () => {
    if (film) {
      const selectedImage = filmImages[id as string];

      return (
        <>
          {film.title && <Text weight="bold">{film.title}</Text>}
          {selectedImage && <S.ImageContainer>
              <Image
              src={selectedImage}
              alt="Film poster"
              width="250"
              height="350"
              loading="lazy"
              />
            </S.ImageContainer>
          }
          {film.opening_crawl && <Text>{film.opening_crawl}</Text>}
          {film.director && <Text>Director: {film.director}</Text>}
          {film.producer && <Text>Producer: {film.producer}</Text>}
          {film.release_date && <Text>Release Date: {formatDate(film.release_date)}</Text>}
          <Button onClick={() => router.push('/')}>Voltar para a home</Button>
        </>
      );
    }
  };

  return (
    <>
       <Banner
          pageName={BANNERS.film.pageName}
          pageDescription={BANNERS.film.pageDescription}
          finalText={BANNERS.film.pageName}
      />
      <Container>
        <Text variant="subheading" weight="bold" align="center">
          Film Details:
        </Text>
        <S.InfoWrapper>{renderFilmInfo()}</S.InfoWrapper>
      </Container>
    </>
  );
};

export default FilmDetailsPage;
