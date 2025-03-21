import { styled } from 'styled-components';
import Link from 'next/link';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xxl};
  margin: ${({ theme }) => theme.sizes.xxl};
`;

export const PageLink = styled(Link)`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family:  ${({ theme }) => theme.fontFamily.primary};
`;