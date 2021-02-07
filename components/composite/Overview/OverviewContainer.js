import styled from 'styled-components';
import { getFadeInAnimation } from '../../../utils/animation';
import { easingFunction, PRIMARY_COLOR } from '../../../utils/theme';
import { Flex } from '../../ui';

const OverviewContainer = styled(Flex)`
  position: relative;
  z-index: 1;

  /* &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 25px;
    left: 25px;
    background-color: ${PRIMARY_COLOR};
    opacity: 0.75;
    animation: ${getFadeInAnimation(0.75)} 2s ${easingFunction}; 
    animation-fill-mode: forwards;
    z-index: -1;
  } */
`;

export default OverviewContainer;
