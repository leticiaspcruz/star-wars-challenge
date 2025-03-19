import React from 'react';
import { Container, Pagination, Text } from '@/components';
import * as S from './styles';
interface Item {
  name: string;
}

interface SectionListProps {
  items: Item[];
  isLoading: boolean;
  isError: string | boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemType: string;
}

const SectionList: React.FC<SectionListProps> = ({
  items,
  isLoading,
  isError,
  currentPage,
  totalPages,
  onPageChange,
  itemType,
}) => {
  return (
    <Container>
      <Text weight='bold'>{itemType}</Text>

      {isLoading && <Text>Carregando {itemType.toLowerCase()}...</Text>}
      {isError && <Text>{typeof isError === 'string' ? isError : 'Ocorreu um erro.'}</Text>}

      {items.length > 0 && !isLoading ? (
        <S.ListItems>
          {items.map((item) => (
            <li key={item.name}>
              <Text>{item.name}</Text>
            </li>
          ))}
        </S.ListItems>
      ) : (
        !isLoading && <Text>Não há {itemType.toLowerCase()} disponíveis.</Text>
      )}

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={onPageChange} 
      />
    </Container>
  );
};

export default SectionList;
