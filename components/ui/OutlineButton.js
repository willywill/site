import styled, { keyframes } from 'styled-components';
import { easingFunction } from '../../utils/theme';

const borderAnimation = keyframes`
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 1565;
  }
`;

const OutlineButton = styled.svg`
  display: block;
  position: absolute;
  top: -30px;
  left: -47px;
  cursor: pointer;
  margin: auto;
  stroke-dasharray: 150 200 140 140;
  animation: ${borderAnimation} 20s linear infinite;
  animation-play-state: running;
  transition: stroke-dasharray 1.5s ${easingFunction};

  &:hover {
    stroke-dashoffset: 0;
    stroke-dasharray: 2000 600 600 600;
    animation-play-state: paused;
    transition: stroke-dasharray 1.5s ${easingFunction};
  }
`;

export default OutlineButton;
