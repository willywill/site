import React from 'react';
import reset from 'styled-reset';
import { node, string } from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { easingFunction, HIGHLIGHT_COLOR, WHITE } from '../../utils/theme';
import { Flex } from '.';

const GlobalStyle = createGlobalStyle`
  ${reset};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  ::selection { background-color: ${HIGHLIGHT_COLOR}; }
  ::-webkit-selection { background-color: ${HIGHLIGHT_COLOR}; }
  ::-moz-selection { background-color: ${HIGHLIGHT_COLOR}; }
  scroll-behavior: smooth;

  /* Animate-on-scroll Add-Ons */
  [data-aos] {
  body[data-aos-easing="custom-easing"] &,
    &[data-aos][data-aos-easing="custom-easing"] {
      transition-timing-function: ${easingFunction};
    }
  }

  [data-aos="fly-in"] {
    opacity: 0;
    transform: translateY(100px);
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Page = ({ children, backgroundColor }) => (
  <Flex
    w={1}
    background={backgroundColor}
    column
    align="center"
    justify="center"
    style={{ minHeight: '100vh', position: 'relative' }}
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
