import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: ${({ theme }) => theme.sizes.super} auto;
    gap: ${({ theme }) => theme.sizes.sm};
`;

export const Search = styled.input`
     all: unset; 
     width: 100%;
     border: none; 
     outline: none; 
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  border: 1px ${({ theme }) => theme.colors.text} solid !important;
  border-radius: 16px;
  padding: ${({ theme }) => theme.sizes.sm};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  pointer-events: none;
`;
