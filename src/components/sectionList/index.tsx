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
  itemType: 'character' | 'planet' | 'favorites' | 'mixed';
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
    character: 'Characters',
    planet: 'Planets',
    favorites: 'My Favorites',
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
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
        },
      },
    ],
  };

  const errorText = `Oops! We didn't find anything in ${titles[itemType]}`;

  if (isLoading) return <Loader />;
  if (isError) return <Error errorText={errorText} />;
  if (!isClient) return null;

  return (
    <S.Container>
      {useTitle &&
        <Text weight="bold" variant="subheading" align='center'>
          {titles[itemType]}
        </Text>
      }

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

      {usePagination && items.length > 0 && (
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
