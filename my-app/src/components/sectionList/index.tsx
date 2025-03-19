import React from 'react';
import { Pagination, Text, Card, Loader } from '@/components';
import { Character, Planet } from '@/interfaces/swapi';
import * as S from './styles';

interface Item extends Character, Planet {
  name: string;
  url: string;
}

interface SectionListProps {
  items: Item[];
  isLoading: boolean;
  isError: string | boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemType: 'character' | 'planet';
  useTitle?: boolean;
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
}) => {
  return (
      <S.Container>
        {useTitle && <Text weight="bold" variant='subheading'>{itemType === 'character' ? 'Personagens' : 'Planetas'}</Text>}

        {isLoading && <Loader />}
        {isError && <Text>{typeof isError === 'string' ? isError : 'Ocorreu um erro.'}</Text>}

        <S.CardList>
          {items.length > 0 && !isLoading && !isError ? (
            items.map((item, index) => (
                <Card key={index} data={item} type={itemType} />
            ))
          ) : (
            !isLoading && <Text>Não há {itemType.toLowerCase()} disponíveis.</Text>
          )}
        </S.CardList>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </S.Container>
  );
};

export default SectionList;
