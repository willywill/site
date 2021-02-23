/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../utils/theme';

const AccentBar = styled.div.attrs((props) => ({
  'data-aos': props.reversed ? 'accent-slide-in-reversed' : 'accent-slide-in',
  'data-aos-duration': '1200',
  'data-aos-offset': props.animateImmediately ? '0' : props.reversed ? '100' : '650',
}))`
  width: 100px;
  height: 4px;
  opacity: 0.4;
  background-color: ${(props) => props.color || PRIMARY_COLOR};
`;

export default AccentBar;
