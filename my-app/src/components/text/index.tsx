import React from 'react';
import * as S from './styles';

interface TextProps {
  variant?: 'heading' | 'subheading' | 'paragraph' | 'small';
  weight?: 'regular' | 'bold' | 'light';
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ 
  variant = 'paragraph', 
  weight = 'regular', 
  children, 
  className 
}) => {
  return (
    <S.Text
      variant={variant}
      weight={weight}
      className={className}
    >
      {children}
    </S.Text>
  );
};

export default Text;
