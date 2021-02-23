import styled from 'styled-components';
import { breakpoints, PRIMARY_COLOR } from '../../../utils/theme';

const ImageBackground = styled.div`
  width: 480px;
  height: 700px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 480px;
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
    width: 480px;
    height: 700px;
    top: 50px;
    left: ${(props) => (props.flip ? '-50px' : '50px')};
    background-color: ${PRIMARY_COLOR};
    opacity: 0.15;
    z-index: -2;
  }

  @media (max-width: 1350px) {
    width: 380px;
    height: 600px;

    &::before {
      width: 380px;
      height: 600px;
    }

    &::after {
      width: 380px;
      height: 600px;
    }
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 280px;
    height: 500px;

    &::before {
      width: 280px;
      height: 500px;
    }

    &::after {
      width: 280px;
      height: 500px;
    }
  }
`;

export default ImageBackground;
