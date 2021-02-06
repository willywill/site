import styled from 'styled-components';
import { getFadeInAnimation } from '../../../utils/animation';
import { easingFunction } from '../../../utils/theme';
import { Box } from '../../ui';

const OverviewItemContainer = styled(Box)`
  background-image: ${(props) => `url(${props.url})`};
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: filter 0.5s ${easingFunction}, background-size 0.5s ${easingFunction};
  filter: saturate(0.2);
  cursor: pointer;
  animation: ${getFadeInAnimation(1.0)} 1s ${easingFunction};
  
  &:hover {
    filter: saturate(0.85);
    background-size: auto 105%;
  }
`;

export default OverviewItemContainer;
