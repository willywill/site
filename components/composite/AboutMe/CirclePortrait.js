import styled from 'styled-components';
import { breakpoints, PRIMARY_COLOR_TRANSLUCENT } from '../../../utils/theme';

const CirclePortrait = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-color: ${PRIMARY_COLOR_TRANSLUCENT};
  background-image: url('/about-me/self.webp');
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: ${breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
`;

CirclePortrait.displayName = 'CirclePortrait';

export default CirclePortrait;
