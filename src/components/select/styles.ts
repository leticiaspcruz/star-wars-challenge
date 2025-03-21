import { styled } from 'styled-components';

export const SelectWrapper = styled.select`
  all: unset;
  width: 100%;
  padding: ${({ theme }) => theme.sizes.sm};
  border: 1px ${({ theme }) => theme.colors.text} solid !important;
  border-radius: 8px;
`;

export const OptionWrapper = styled.option`
  padding: ${({ theme }) => theme.sizes.sm};
  color: ${({ theme }) => theme.colors.button.text};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.sizes.sm};
`