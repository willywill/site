import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/theme';

const ImageBackground = styled.div`
  margin-top: 500px;
  width: 400px;
  height: 600px;
  background-color: ${PRIMARY_COLOR};
  opacity: 0.75;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 600px;
    top: 50px;
    left: 50px;
    background-color: ${PRIMARY_COLOR};
    opacity: 0.4;
  }
`;

export default ImageBackground;
