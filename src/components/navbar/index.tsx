'use client';
import React, { useState } from 'react';
import * as S from './styles';
import { NAV_LINKS } from '@/constants/navbar';
import { Logo, SwitchTheme } from '@/components';
import { useScreenSize } from '@/hooks';

const NavBar = () => {
  const { isClient, isMobileView } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!isClient) return null;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <S.Container>
      <Logo />
      {isMobileView ? (
        <>
          <SwitchTheme size="8px" />
          <nav>          
            <S.HamburgerIcon onClick={toggleMenu}>☰</S.HamburgerIcon>
            <S.MobileMenu isOpen={isMenuOpen}>
              {NAV_LINKS.map((link) => (
                <S.NavLink key={link.href} href={link.href} onClick={closeMenu}>
                  {link.name}
                </S.NavLink>
              ))}
            </S.MobileMenu>
          </nav>
        </>
      ) : (
        <>
          <nav>
            <S.LinksWrapper>
              {NAV_LINKS.map((link) => (
                <S.NavLink key={link.href} href={link.href}>
                  {link.name}
                </S.NavLink>
              ))}
            </S.LinksWrapper>
          </nav>
          <SwitchTheme size="10px" />
        </>
      )}
    </S.Container>
  );
};

export default NavBar;
