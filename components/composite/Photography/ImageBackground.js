import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/theme';

const ImageBackground = styled.div`
  margin-top: 500px;
  width: 500px;
  height: 700px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 700px;
    top: 25px;
    left: ${(props) => (props.flip ? '-25px' : '25px')};
    background-color: ${PRIMARY_COLOR};
    opacity: 0.275;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 700px;
    top: 50px;
    left: ${(props) => (props.flip ? '-50px' : '50px')};
    background-color: ${PRIMARY_COLOR};
    opacity: 0.15;
    z-index: -2;
  }
`;

export default ImageBackground;
