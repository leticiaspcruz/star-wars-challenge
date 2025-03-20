import { styled } from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xxl};
  margin: ${({ theme }) => theme.sizes.xxl};
  place-items: center; 
`;