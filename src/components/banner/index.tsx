import React, { useState, useEffect } from 'react';
import { Text } from '@/components';
import * as S from './styles';

interface StarWarsIntroProps {
  pageName: string;
  pageDescription: string;
  finalText: string;
}

const Banner: React.FC<StarWarsIntroProps> = ({ pageName, pageDescription, finalText }) => {
  const [showFinalText, setShowFinalText] = useState(false);
  const [showCredits, setShowCredits] = useState(true);

  useEffect(() => {
    const animationDuration = 20000;

    const timer = setTimeout(() => {
      setShowCredits(false);
      setTimeout(() => {
        setShowFinalText(true);
      }, 1000);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        {showCredits && (
          <div className='credits'>
            <Text variant='heading' weight='bold' align='center'>{pageName}</Text>
            <Text variant='subheading' weight='bold' align='center'>{pageDescription}</Text>
          </div>
        )}
        {showFinalText && (
          <S.FinalTextContainer>
            <Text variant='heading' weight='bold' align='center'>{finalText}</Text>
          </S.FinalTextContainer>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Banner;
