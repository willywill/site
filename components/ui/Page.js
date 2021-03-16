/* globals window */
import React, { useEffect } from 'react';
import reset from 'styled-reset';
import { NextSeo } from 'next-seo';
import { node, string } from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { HIGHLIGHT_COLOR, WHITE } from '../../utils/theme';
import { Flex } from '.';
import { animateOnScrollAddOns } from '../../utils/animation';
import analytics from '../../lib/analytics';

const GlobalStyle = createGlobalStyle`
  ${reset};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  ::selection { background-color: ${HIGHLIGHT_COLOR}; }
  ::-webkit-selection { background-color: ${HIGHLIGHT_COLOR}; }
  ::-moz-selection { background-color: ${HIGHLIGHT_COLOR}; }
  scroll-behavior: smooth;

  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }

  /* Animate-on-scroll Add-Ons */
  ${animateOnScrollAddOns}
`;

const Page = ({ children, backgroundColor }) => {
  useEffect(() => {
    if (!window.ANALYTICS_INITIALIZED) {
      analytics.load();
      window.ANALYTICS_INITIALIZED = true;
    }
  }, []);

  return (
    <Flex
      w={1}
      background={backgroundColor}
      column
      align="center"
      justify="center"
      style={{ minHeight: '100vh', position: 'relative' }}
    >
      <NextSeo
        title="Portfolio"
        description="I'm a self-taught software engineer
      working on full-stack web development, real-time computer graphics and photography."
        robotsProps={{
          maxImagePreview: 'standard',
        }}
        openGraph={{
          type: 'website',
          url: 'https://williamgermany.com',
          title: "Will Germany's Portfolio",
          description: "I'm a self-taught software engineer working on full-stack web development, real-time computer graphics and photography.",
          images: [
            {
              url: 'https://williamgermany.com/about-me/self.jpg',
              width: 367,
              height: 245,
              alt: 'Self Portrait',
            },
          ],
        }}
        twitter={{
          handle: '@WillGermany',
          site: '@WillGermany',
          cardType: 'summary',
        }}
      />
      {children}
      <GlobalStyle />
    </Flex>
  );
};

Page.displayName = 'Page';

Page.propTypes = {
  children: node.isRequired,
  backgroundColor: string,
};

Page.defaultProps = {
  backgroundColor: WHITE,
};

export default Page;
