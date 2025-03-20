import { useRouter } from 'next/router';
import useCharacters from '@/hooks/useCharacters';
import { Button, Text, Container, Loader, Banner } from '@/components';
import { Character } from '@/interfaces/swapi';
import BannerCharacters from '@/assets/characters-banner.jpg';
import { getIdFromUrl } from '@/utils/getIdFromUrl';
import * as S from './styles';

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
            <Text weight='bold' align='center'>Planeta de origem:</Text>
            <Button onClick={() => router.push(`/planets/${getIdFromUrl(character.homeworld)}`)}>
              Ver planeta do personagem
            </Button>
          </S.InfoWrapper>
        )}
        {character.films.length > 0 && (
          <S.InfoWrapper>
            <Text weight='bold' align='center'>Filmes em que o personagem aparece:</Text>
            {character.films.map((film: string) => (
                <Button key={film} size='fullSize' onClick={() => router.push(`/films/${getIdFromUrl(film)}`)}>
                  Filme {getIdFromUrl(film)}
                </Button>
            ))}
          </S.InfoWrapper>
        )}
      </>
    );
  
  if (isLoading) return <Loader />;
  if (error) return <Text>Ops! Não existe nada em detalhes.</Text>;
  if (!character) return <Text>Personagem não encontrado.</Text>;
  
  return (
    <>
    <Banner
    imageUrl={BannerCharacters}
    altText="Detalhes do personagem"
    text="Detalhes do personagem"
    />
    <Container>
      <Text variant='subheading' weight='bold' align='center'>Detalhes do Personagem</Text>
      <S.InfoWrapper>
      {renderCharacterInfo(character)}
      <Button onClick={() => router.push('/characters')}>Voltar para a lista</Button>
      </S.InfoWrapper>
    </Container>
    </>
  );
};

export default CharacterDetailsPage;
