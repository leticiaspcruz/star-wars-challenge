import styled from 'styled-components';
import { mediaQuery } from '@/utils/getScreenSize';

export  const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
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
    left: 18%;
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    text-shadow: 1px 1px 10px black;

 ${mediaQuery('tablet-max')} {
    left: 40%;
  }
`;
