import styled from 'styled-components';
import { breakpoints, PRIMARY_COLOR } from '../../../utils/theme';

const ImageBackground = styled.div`
  margin-top: 500px;
  width: 26vw;
  max-width: 500px;
  height: 65vh;
  max-height: 700px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 26vw;
    max-width: 500px;
    height: 65vh;
    max-height: 700px;
    top: 25px;
    left: ${(props) => (props.flip ? '-25px' : '25px')};
    background-color: ${PRIMARY_COLOR};
    opacity: 0.275;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 26vw;
    max-width: 500px;
    height: 65vh;
    max-height: 700px;
    top: 50px;
    left: ${(props) => (props.flip ? '-50px' : '50px')};
    background-color: ${PRIMARY_COLOR};
    opacity: 0.15;
    z-index: -2;
  }

  @media screen and (min-device-width: ${breakpoints.tablet}) and (max-device-width: ${breakpoints.desktopSmall}) {
    width: 45vw;
    height: 55vh;

    &::before {
      width: 45vw;
      height: 55vh;
    }

    &::after {
      width: 45vw;
      height: 55vh;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70vw;
    height: 58vh;

    &::before {
      width: 70vw;
      height: 58vh;
    }

    &::after {
      width: 70vw;
      height: 58vh;
    }
  }
`;

export default ImageBackground;
