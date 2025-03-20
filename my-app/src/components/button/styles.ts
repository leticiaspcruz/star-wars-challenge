import { styled } from 'styled-components';

interface StyleProps {
  size?: 'small' | 'medium' | 'large' | 'fullSize';
}

export const Button = styled.button<StyleProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.button.text};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: ${({ size, theme }) =>
    size === 'small' ? theme.sizes.sm :
    size === 'large' ? theme.sizes.lg :
    theme.sizes.md};
  width: ${({ size }) => size === 'fullSize' ? '100%' : 'auto'};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
      transition: background-color 0.3s ease, transform 0.3s ease;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
  }
`;