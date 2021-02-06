import styled from 'styled-components';
import { getFadeInAnimation } from '../../../utils/animation';
import { easingFunction } from '../../../utils/theme';

const CirclePortrait = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-image: url('/self.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: ${getFadeInAnimation(1.0)} 0.4s 0.5s ${easingFunction};
  animation-fill-mode: forwards;
`;

CirclePortrait.displayName = 'Ci';

export default CirclePortrait;
