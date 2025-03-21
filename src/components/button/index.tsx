import React from 'react';
import * as S from './styles';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large' | 'fullSize';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ size = 'small', onClick, disabled, children }) => {
  return (
    <S.Button size={size} onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;
