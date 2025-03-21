import React from 'react';
import { Pagination, Text, Card, Loader } from '@/components';
import { Character, Planet } from '@/interfaces/swapi';
import Slider from 'react-slick';
import * as S from './styles';

interface SectionListProps {
  items: (Character | Planet)[];
  isLoading: boolean;
  isError: string | boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemType: 'character' | 'planet' | 'favorites';
  useTitle?: boolean;
  usePagination?: boolean;
}

const SectionList: React.FC<SectionListProps> = ({
  items,
  isLoading,
  isError,
  currentPage,
  totalPages,
  onPageChange,
  itemType,
  useTitle = true,
  usePagination = true,
}) => {

  const titles: Record<string, string> = {
    character: 'personagens',
    planet: 'planetas',
    favorites: 'meus favoritos',
  };

  if (isLoading) return <Loader />;
  if (isError) return <Text>Ops! Ocorreu um erro, tente novamente mais tarde.</Text>;

  const carouselSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <S.Container>
      {useTitle && <Text weight="bold" variant="subheading">{titles[itemType]}</Text>}

      <S.CardList>
        {items.length > 0 && !isLoading && !isError ? (
          <Slider {...carouselSettings}>
            {items.map((item, index) => (
              <div key={index}>
                <Card data={item} type={itemType} />
              </div>
            ))}
          </Slider>
        ) : (
          !isLoading && <Text>Ops! Não existe nada em {titles[itemType]}.</Text>
        )}
      </S.CardList>

      {usePagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </S.Container>
  );
};

export default SectionList;
