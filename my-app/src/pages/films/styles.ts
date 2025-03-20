import { styled } from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xxl};
  padding: ${({ theme }) => theme.sizes.xxl};
  margin: ${({ theme }) => theme.sizes.xxl};
  place-items: center; 
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 24px 16px;
  box-shadow: rgba(29, 29, 29, 0.24) 0px 8px 16px;
  border-radius: 24px;
  width: 250px;
  height: auto;
  border: none;
  box-sizing: border-box;
`;