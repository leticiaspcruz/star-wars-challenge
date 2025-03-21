import React from 'react';
import { Pagination, Text, Card, Loader, Error } from '@/components';
import { Character, Planet } from '@/interfaces/swapi';
import Slider from 'react-slick';
import { useScreenSize } from '@/hooks';
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
  const { isClient, isMobileView } = useScreenSize();

  const titles: Record<string, string> = {
    character: 'personagens',
    planet: 'planetas',
    favorites: 'meus favoritos',
  };

  const carouselSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (isLoading) return <Loader />;
  if (isError) return <Error errorText='Ops! Ocorreu um erro, tente novamente mais tarde.' />;
  if (!isClient) return null;

  return (
    <S.Container>
      {useTitle && <Text weight="bold" variant="subheading">{titles[itemType]}</Text>}

      <S.CardList>
        {items.length > 0 && !isLoading && !isError && (
          isMobileView ? (
            <Slider {...carouselSettings}>
              {items.map((item, index) => (
                <div key={index}>
                  <Card data={item} type={itemType} />
                </div>
              ))}
            </Slider>
          ) : (
            items.map((item, index) => (
              <div key={index}>
                <Card data={item} type={itemType} />
              </div>
            ))
          )
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
