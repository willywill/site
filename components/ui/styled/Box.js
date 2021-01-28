import { Box as GridBox } from '@rebass/grid';
import styled from 'styled-components';

const Box = styled(GridBox)`
  ${({ height }) => (height ? `height: ${height}` : '')};
  ${({ background }) => (background ? `background: ${background}` : '')};
`;

export default Box;
