import { styled } from 'styled-components';
import Link from 'next/link';
import { mediaQuery } from '@/utils/getScreenSize';

export const Container = styled.div<{ isMenuOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.md};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  position: ${({ isMenuOpen }) => (isMenuOpen ? 'fixed' : 'static')};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  ${mediaQuery('tablet-max')}  {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1rem;

  ${mediaQuery('tablet-max')}  {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const HamburgerIcon = styled.div`
  font-size:  ${({ theme }) => theme.fontSizes.xl};;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};

  ${mediaQuery('laptop-min')}  {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.sm};
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizes.md};
  width: 100%;
  position: absolute;
  top: 120px;
  left: 0;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  overflow: hidden;
  transition: max-height 0.3s ease-out, visibility 0.3s ease-out;
  z-index: 20;
`;
