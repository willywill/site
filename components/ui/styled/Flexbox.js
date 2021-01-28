import { Flex as GridFlex } from '@rebass/grid';
import styled from 'styled-components';

const Flexbox = styled(GridFlex)`
  ${({ height }) => (height ? `height: ${height}` : '')};
  ${({ column }) => (column ? 'flex-direction: column' : '')};
  ${({ align }) => (align ? `align-items: ${align}` : '')};
  ${({ justify }) => (justify ? `justify-content: ${justify}` : '')};
  ${({ background }) => (background ? `background: ${background}` : '')};
`;

export default Flexbox;
