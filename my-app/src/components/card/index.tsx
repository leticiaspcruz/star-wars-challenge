import React, { useState } from 'react';
import { Text, Button } from '@/components';
import { Character, Planet } from '@/interfaces/swapi';
import * as S from './styles';

type CardProps = {
  type: 'character' | 'planet';
  data: Character | Planet;
};

const Card: React.FC<CardProps> = ({ type, data }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore((prev) => !prev);

  const renderCharacterInfo = (character: Character) => {
    const basicInfo = (
      <>
        {character.name && <Text weight="bold" align="center">{character.name}</Text>}
        {character.height && <Text>Height: {character.height} cm</Text>}
        {character.mass && <Text>Mass: {character.mass} kg</Text>}
      </>
    );

    const additionalInfo = (
      <>
        {character.hair_color && <Text>Hair Color: {character.hair_color}</Text>}
        {character.skin_color && <Text>Skin Color: {character.skin_color}</Text>}
        {character.birth_year && <Text>Birth Year: {character.birth_year}</Text>}
        {character.gender && <Text>Gender: {character.gender}</Text>}
      </>
    );

    return (
      <>
        {basicInfo}
        {showMore && additionalInfo}
      </>
    );
  };

  const renderPlanetInfo = (planet: Planet) => {
    const basicInfo = (
      <>
        {planet.name && <Text weight="bold" align="center">{planet.name}</Text>}
        {planet.rotation_period && <Text>Rotation Period: {planet.rotation_period} hours</Text>}
        {planet.orbital_period && <Text>Orbital Period: {planet.orbital_period} days</Text>}
      </>
    );

    const additionalInfo = (
      <>
        {planet.diameter && <Text>Diameter: {planet.diameter} km</Text>}
        {planet.climate && <Text>Climate: {planet.climate}</Text>}
        {planet.gravity && <Text>Gravity: {planet.gravity}</Text>}
        {planet.terrain && <Text>Terrain: {planet.terrain}</Text>}
        {planet.population && <Text>Population: {planet.population}</Text>}
      </>
    );

    return (
      <>
        {basicInfo}
        {showMore && additionalInfo}
      </>
    );
  };

  return (
    <S.CardContainer className="card">
      <S.InfoWrapper>
        <div className="card-content">
          {type === 'character' ? renderCharacterInfo(data as Character) : renderPlanetInfo(data as Planet)}
        </div>
        <Button onClick={toggleShowMore}>{showMore ? 'Ver menos' : 'Ver mais'}</Button>
      </S.InfoWrapper>
    </S.CardContainer>
  );
};

export default Card;
