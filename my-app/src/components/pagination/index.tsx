import React from 'react';
import { Button } from '@/components';
import * as S from './styles';
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
    <S.Container>
      <Button 
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))} 
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <span>Página {currentPage} de {totalPages}</span>
      <Button 
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} 
        disabled={currentPage === totalPages}
      >
        Próxima
      </Button>
    </S.Container>
  );
};

export default Pagination;
