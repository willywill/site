import styled, { css, keyframes } from 'styled-components';
import { easingFunction, PRIMARY_COLOR } from '../../utils/theme';

const growRight = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 0.4;
  }
`;

const growLeft = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 0.4;
  }
`;

const AccentBar = styled.div`
  width: 100px;
  height: 4px;
  opacity: 0.4;
  background-color: ${(props) => props.color || PRIMARY_COLOR};
  animation: ${(props) => css`${props.reversed ? growRight : growLeft} 1200ms ${easingFunction}`};
`;

export default AccentBar;
