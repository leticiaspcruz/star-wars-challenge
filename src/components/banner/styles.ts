import styled from 'styled-components';
import { mediaQuery } from '@/utils/getScreenSize';

export  const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
`;

export const BannerText = styled.div`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fontFamily.primary};

 ${mediaQuery('tablet-max')} {
    left: 40%;
  }
`;
