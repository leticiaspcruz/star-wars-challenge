import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navbar};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 0;
  text-align: center;
  z-index: 1000;
`;

export const SocialIconsContainer = styled.div`
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  margin: 0 10px;
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

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;