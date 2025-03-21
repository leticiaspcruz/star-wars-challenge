import { styled } from 'styled-components';
import { FaRebel as RebelIcon } from "react-icons/fa6";
import Link from 'next/link';

interface StyleProps {
  $isFavorite?: boolean;
}

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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => `${theme.sizes.xxl}`};
  overflow: hidden;
`;

export const FavoriteWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

export const FavoriteIcon = styled(RebelIcon)<StyleProps>`
  color: ${({ $isFavorite }) => ($isFavorite ? 'red' : 'white')};
  font-size: 1.5rem;
  transition: color 0.3s ease;
`;

export const DetailPageLink = styled(Link)`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family:  ${({ theme }) => theme.fontFamily.primary};
`;