'use client';
import React from 'react'
import { SOCIAL_MEDIA } from '@/constants/socialMedia';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import * as S from './styles';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.CopyRightText>
        &copy; 2025 by <S.CopyRightLink href={SOCIAL_MEDIA.site} target="_blank" rel="noopener noreferrer">@leticiaspcruz</S.CopyRightLink>.
      </S.CopyRightText>
      <S.SocialIconsContainer>
        <S.SocialIcon href={SOCIAL_MEDIA.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </S.SocialIcon>
        <S.SocialIcon href={SOCIAL_MEDIA.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </S.SocialIcon>
        <S.SocialIcon href={SOCIAL_MEDIA.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </S.SocialIcon>
      </S.SocialIconsContainer>
    </S.FooterContainer>
  );
};

export default Footer;
