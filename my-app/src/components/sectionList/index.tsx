import React from 'react';

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

      <div>
        <button onClick={() => onPageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    </section>
  );
};

export default SectionList;
