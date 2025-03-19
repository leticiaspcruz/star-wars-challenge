import styled from 'styled-components';
import { mediaQuery } from '@/utils/getScreenSize';

export const Container = styled.div`
  margin: ${({ theme }) => `${theme.sizes.xl}`};

  ${mediaQuery('super')} {
    padding: 0;
    margin: ${({ theme }) => `${theme.sizes.xxl} auto`};
  }
`;
