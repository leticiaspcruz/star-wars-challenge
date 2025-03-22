import styled, { keyframes } from 'styled-components';
const scroll = keyframes`
  0% {
    transform: rotateX(21deg) translate3d(0, 50rem, 0);
    opacity: 1;
  }

  90% {
    opacity: 1;
  }
  100% {
    transform: rotateX(21deg) translate3d(0, -100rem, 0);
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  perspective: 380px;
  perspective-origin: bottom;
  overflow: visible;
  transform: scaleY(0.9);
  background: transparent;
  z-index: 10;

  .credits {
    position: absolute;
    top: 0;
    left: 13%;
    right: 13%;
    height: 100%;
    animation: ${scroll} 30s linear forwards;
    animation-play-state: running;
    transition: opacity 1s ease-in-out;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
`;

export const FinalTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
`;
