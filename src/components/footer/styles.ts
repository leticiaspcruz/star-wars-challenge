import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.sizes.md} 0;
  text-align: center;
  top: 0;
  margin-top: auto !important;
`;

export const SocialIconsContainer = styled.div`
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};;
  margin: 0  ${({ theme }) => theme.sizes.md};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CopyRightLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CopyRightText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
