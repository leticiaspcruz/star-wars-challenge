import styled, { keyframes } from 'styled-components';
import { mediaQuery } from '@/utils/getScreenSize';

const pulseYoda = keyframes`
  0%, 100% { background: #8cff00; box-shadow: 0 0 20px #8cff00; }
  50% { background: #aaff66; box-shadow: 0 0 30px #aaff66; }
`;

const ignite = keyframes`
  0%, 100% { height: 0; opacity: 0; }
  50% { height: 160px; opacity: 1; }
`;

export const Container = styled.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

export const Lightsaber = styled.div`
  position: relative;
  height: 210px;
  
  ${mediaQuery('tablet-min')} {
    width: 15px;
  }
`;

export const Switch = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 40px;
  background: #333;
  border-radius: 2px;
  z-index: 100;

  span {
    display: block;
    margin: 8px auto;
    width: 8px;
    height: 8px;
    background: #ff0;
    border-radius: 50%;
  }

  ${mediaQuery('tablet-min')} {
    width: 8px;
    height: 30px;

    span {
      width: 6px;
      height: 6px;
    }
  }
`;

export const Plasma = styled.div`
  position: absolute;
  bottom: 35px;
  left: 0;
  width: 10px;
  border-radius: 8px;
  animation: ${ignite} 1.2s infinite ease-in-out, ${pulseYoda} 1.2s infinite ease-in-out;

  ${mediaQuery('tablet-min')} {
    width: 8px;
  }
`;
