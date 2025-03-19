import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div>
      <button 
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))} 
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button 
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} 
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
