import { useRouter } from 'next/router';
import useCharacters from '@/hooks/useCharacters';
import { Button, Text, Container, Loader, Banner } from '@/components';
import { Character } from '@/interfaces/swapi';
import BannerCharacters from '@/assets/characters-banner.jpg';
import * as S from './styles';

const CharacterDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { character, isLoading, error } = useCharacters('', 1, id as string);

   const renderCharacterInfo = (character: Character) => (
      <>
        {character.name && <Text weight="bold">{character.name}</Text>}
        {character.height && <Text>Height: {character.height} cm</Text>}
        {character.mass && <Text>Mass: {character.mass} kg</Text>}
        {character.hair_color && <Text>Hair Color: {character.hair_color}</Text>}
        {character.skin_color && <Text>Skin Color: {character.skin_color}</Text>}
        {character.birth_year && <Text>Birth Year: {character.birth_year}</Text>}
        {character.gender && <Text>Gender: {character.gender}</Text>}
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
