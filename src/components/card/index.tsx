import React, { useState, useEffect } from 'react';
import { Text, Button } from '@/components';
import { Character, Planet } from '@/interfaces/swapi';
import * as S from './styles';
interface CardProps {
  type: 'character' | 'planet' | 'favorites';
  data: Character | Planet;
};

const Card: React.FC<CardProps> = ({ type, data }) => {
  const [showMore, setShowMore] = useState(false);
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const isAlreadyFavorite = favorites.some((favorite: Character | Planet) => favorite.name === data.name);
      setIsFavorite(isAlreadyFavorite);
    }
  }, [data]);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  const toggleFavorite = () => {
    const favorites = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favorites') || '[]') : null;

    if (isFavorite) {
      const updatedFavorites = favorites.filter((favorite: Character | Planet) => favorite.name !== data.name);
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }
    } else {
      favorites.push(data);
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    }

    setIsFavorite(!isFavorite);
  };

  const getId = (item: Character | Planet) => {
    if(!item) return;
    return item.url.split('/').filter(Boolean).pop()
  };

  const renderCharacterInfo = (character: Character) => (
    <>
      {character.name && <Text weight="bold">{character.name}</Text>}
      {character.height && <Text>Height: {character.height} cm</Text>}
      {character.mass && <Text>Mass: {character.mass} kg</Text>}
      {showMore && (
        <>
          {character.hair_color && <Text>Hair Color: {character.hair_color}</Text>}
          {character.skin_color && <Text>Skin Color: {character.skin_color}</Text>}
          {character.birth_year && <Text>Birth Year: {character.birth_year}</Text>}
          {character.gender && <Text>Gender: {character.gender}</Text>}
          <S.DetailPageLink href={`/characters/${getId(character)}`}>Ir para página de detalhes</S.DetailPageLink>
        </>
      )}
    </>
  );

  const renderPlanetInfo = (planet: Planet) => (
    <>
      {planet.name && <Text weight="bold">{planet.name}</Text>}
      {planet.rotation_period && <Text>Rotation Period: {planet.rotation_period} hours</Text>}
      {planet.orbital_period && <Text>Orbital Period: {planet.orbital_period} days</Text>}
      {showMore && (
        <>
          {planet.diameter && <Text>Diameter: {planet.diameter} km</Text>}
          {planet.climate && <Text>Climate: {planet.climate}</Text>}
          {planet.gravity && <Text>Gravity: {planet.gravity}</Text>}
          {planet.terrain && <Text>Terrain: {planet.terrain}</Text>}
          {planet.population && <Text>Population: {planet.population}</Text>}
          <S.DetailPageLink href={`/planets/${getId(planet)}`}>Ir para página de planetas</S.DetailPageLink>
        </>
      )}
    </>
  );

  const renderContent = () => {
    if (type === 'favorites') {
      const isCharacter = (data as Character).height !== undefined;
      return isCharacter
        ? renderCharacterInfo(data as Character)
        : renderPlanetInfo(data as Planet);
    }

    return type === 'character'
      ? renderCharacterInfo(data as Character)
      : renderPlanetInfo(data as Planet);
  };

  return (
    <S.CardContainer className="card">
      <S.FavoriteWrapper>
        {isFavorite !== undefined && (
          <Button onClick={toggleFavorite}>
            <S.FavoriteIcon $isFavorite={isFavorite} />
          </Button>
        )}
      </S.FavoriteWrapper>
      <S.InfoWrapper>
        <div className="card-content">
          {renderContent()}
        </div>
        <Button onClick={toggleShowMore}>{showMore ? 'Ver menos' : 'Ver mais'}</Button>
      </S.InfoWrapper>
    </S.CardContainer>
  );
};

export default Card;
