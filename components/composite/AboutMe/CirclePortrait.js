import styled from 'styled-components';
import { PRIMARY_COLOR_TRANSLUCENT } from '../../../utils/theme';

const CirclePortrait = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-color: ${PRIMARY_COLOR_TRANSLUCENT};
  background-image: url('/self.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation-fill-mode: forwards;
`;

CirclePortrait.displayName = 'Ci';

export default CirclePortrait;
