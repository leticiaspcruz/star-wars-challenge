import { styled } from 'styled-components';
import { mediaQuery } from '@/utils/getScreenSize';

export const CardList = styled.div`
  gap: ${({ theme }) => theme.sizes.md};
  margin: ${({ theme }) => theme.sizes.md};

   ${mediaQuery('laptop-min')} {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: ${({ theme }) => theme.sizes.md};
    place-items: center;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-current {
    width: auto !important;
  }

  .slick-track {
    margin: ${({ theme }) => theme.sizes.xl};
  }

`;

export const CardItem = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes.sm};
  margin: ${({ theme }) => theme.sizes.super};

  ${mediaQuery('tablet-max')} {
    margin: ${({ theme }) => theme.sizes.xl};
  }
`;