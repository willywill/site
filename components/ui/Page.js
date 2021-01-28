import React from 'react';
import reset from 'styled-reset';
import { node, string } from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { HIGHLIGHT_COLOR, WHITE } from '../../utils/theme';
import { Flex } from '.';

const GlobalStyle = createGlobalStyle`
  ${reset};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  ::selection { background-color: ${HIGHLIGHT_COLOR}; }
  ::-webkit-selection { background-color: ${HIGHLIGHT_COLOR}; }
  ::-moz-selection { background-color: ${HIGHLIGHT_COLOR}; }
  scroll-behavior: smooth;
`;

const Page = ({ children, backgroundColor }) => (
  <Flex
    w={1}
    background={backgroundColor}
    column
    align="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    {children}
    <GlobalStyle />
  </Flex>
);

Page.displayName = 'Page';

Page.propTypes = {
  children: node.isRequired,
  backgroundColor: string,
};

Page.defaultProps = {
  backgroundColor: WHITE,
};

export default Page;
