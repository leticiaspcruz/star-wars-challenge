import { styled } from 'styled-components';

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  margin: ${({ theme }) => `${theme.sizes.xxl}`};
`;

export const BreadcrumbItem = styled.span`
  display: inline;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const Separator = styled.span`
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
