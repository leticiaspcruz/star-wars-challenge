
import React from 'react';
import Image, { StaticImageData } from "next/legacy/image";

import * as S from './styles';

interface BannerProps {
    imageUrl: string | StaticImageData;
    altText: string;
    text: string;
  }
  
  const Banner: React.FC<BannerProps> = ({ imageUrl, altText, text }) => {
    return (
      <S.BannerContainer>
        <Image
        src={imageUrl}
        alt={altText}
        layout="fill"  
        objectFit="cover"   
        objectPosition="center"
        loading="lazy"
        />
        <S.BannerText>{text}</S.BannerText>
      </S.BannerContainer>
    );
  };
  
  export default Banner;