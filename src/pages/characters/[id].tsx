import { useRouter } from 'next/router';
import useCharacters from '@/hooks/useCharacters';
import { Button, Text, Container, Loader, Banner, Error } from '@/components';
import { Character } from '@/interfaces/swapi';
import { BannerCharacters } from '@/assets';
import { getIdFromUrl } from '@/utils/getIdFromUrl';
import * as S from '@/shared/pagesStyles';

const CharacterDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { character, isLoading, error } = useCharacters('', 1, id as string);

   const renderCharacterInfo = (character: Character) => (
      <>
        {character.name && <Text variant='subheading' weight="bold">{character.name}</Text>}
        {character.height && <Text>Height: {character.height} cm</Text>}
        {character.mass && <Text>Mass: {character.mass} kg</Text>}
        {character.hair_color && <Text>Hair Color: {character.hair_color}</Text>}
        {character.skin_color && <Text>Skin Color: {character.skin_color}</Text>}
        {character.birth_year && <Text>Birth Year: {character.birth_year}</Text>}
        {character.gender && <Text>Gender: {character.gender}</Text>}
        {character.homeworld && (
          <S.InfoWrapper>
            <Text weight='bold' align='center'>Home Planet:</Text>
            <Button onClick={() => router.push(`/planets/${getIdFromUrl(character.homeworld)}`)}>
              See character&apos;s planet
            </Button>
          </S.InfoWrapper>
        )}
        {character.films.length > 0 && (
          <S.InfoWrapper>
            <Text weight='bold' align='center'>Movies in which the character appears:</Text>
            {character.films.map((film: string) => (
                <Button key={film} size='fullSize' onClick={() => router.push(`/films/${getIdFromUrl(film)}`)}>
                  Movie {getIdFromUrl(film)}
                </Button>
            ))}
          </S.InfoWrapper>
        )}
      </>
    );
  
  if (isLoading) return <Loader />;
  if (error) return <Error errorText='Oops! An error occurred, please try again later.' />;;
  if (!character) return <Text>Character not found.</Text>;
  
  return (
    <>
    <Banner
    imageUrl={BannerCharacters}
    altText="Character details"
    text="Character details"
    />
    <Container>
      <Text variant='subheading' weight='bold' align='center'>Character Details</Text>
      <S.InfoWrapper>
      {renderCharacterInfo(character)}
      <Button onClick={() => router.push('/characters')}>Go back to Characters page</Button>
      </S.InfoWrapper>
    </Container>
    </>
  );
};

export default CharacterDetailsPage;
