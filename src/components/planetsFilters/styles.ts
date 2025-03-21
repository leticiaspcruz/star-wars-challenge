import { mediaQuery } from '@/utils/getScreenSize';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  padding: ${({ theme }) => theme.sizes.xl};
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.sizes.l};
  width: 100%;
  max-width: 800px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.l};
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.sizes.sm};

    ${mediaQuery('tablet-max')} {
        justify-content: center;
    }
`;

export const FilterButton = styled.button`
  padding: ${({ theme }) => theme.sizes.sm};
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.button.text};
  cursor: pointer;
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  margin: ${({ theme }) => theme.sizes.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    transition: background-color 0.3s ease-out;
  }
`;
