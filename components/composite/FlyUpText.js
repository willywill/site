import styled, { css, keyframes } from 'styled-components';
import { easingFunction } from '../../utils/theme';
import { Text } from '../ui';

const flyUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const FlyUpText = styled(Text)`
  animation: ${(props) => css`${flyUp} 0.4s ${0.5 * (props.delayMultiplier || 1)}s ${easingFunction}`};
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: transform;
`;

export default FlyUpText;
