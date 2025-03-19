import { styled } from 'styled-components';

interface TextProps {
  variant: 'heading' | 'subheading' | 'paragraph' | 'small';
  weight: 'regular' | 'bold' | 'light';
  align: 'left' | 'center' | 'right'; 
}

const textVariants = {
  heading: '2rem',
  subheading: '1.5rem',
  paragraph: '1rem',
  small: '0.875rem',
};

const textWeights = {
  regular: 400,
  bold: 700,
  light: 300,
};

export const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ variant }) => textVariants[variant] || textVariants.paragraph};
  font-weight: ${({ weight }) => textWeights[weight] || textWeights.regular};
  color: ${({ theme }) => theme.colors.text};
    text-align: ${({ align }) => align};
  line-height: 1.5;
  margin: 0;
`;