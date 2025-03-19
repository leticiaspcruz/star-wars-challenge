import React from 'react';
import * as S from './styles';

interface TextProps {
  variant?: 'heading' | 'subheading' | 'paragraph' | 'small';
  weight?: 'regular' | 'bold' | 'light';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ 
  variant = 'paragraph', 
  weight = 'regular', 
  align = 'left',
  children, 
  className 
}) => {
  return (
    <S.Text
      variant={variant}
      weight={weight}
      align={align}
      className={className}
    >
      {children}
    </S.Text>
  );
};

export default Text;
