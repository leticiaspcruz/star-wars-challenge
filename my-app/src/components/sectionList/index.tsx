import React from 'react';
import { Pagination } from '@/components';

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
  itemType
}) => {
  return (
    <section>
      <h2>{itemType}</h2>

      {isLoading && <p>Carregando {itemType.toLowerCase()}...</p>}
      {isError && <p>{isError}</p>}

      <ul>
        {items.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={onPageChange} 
      />

    </section>
  );
};

export default SectionList;
