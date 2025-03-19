import styled from 'styled-components';
import { mediaQuery } from '@/utils/getScreenSize';

export const Container = styled.div`
  max-width: 1440px;
  margin: ${({ theme }) => `${theme.sizes.l}`};

  ${mediaQuery('super')} {
    padding: 0;
    margin: ${({ theme }) => `${theme.sizes.xxl} auto`};
  }
`;
