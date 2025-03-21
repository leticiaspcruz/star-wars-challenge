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

const rotateSwing = keyframes`
  0% { transform: rotate(0deg); opacity: 0.4; }
  25% { transform: rotate(90deg); opacity: 1; }
  50% { transform: rotate(180deg); opacity: 0.4; }
  75% { transform: rotate(270deg); opacity: 1; }
  100% { transform: rotate(360deg); opacity: 0.4; }
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
  width: 20px;
  height: 200px;
  animation: ${rotateSwing} 2s linear infinite;
  
  ${mediaQuery('tablet-min')} {
    width: 15px;
    height: 160px;
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
