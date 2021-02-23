import React from 'react';
import styled from 'styled-components';
import { mediaQuery, mediaQueryLessThan, SECONDARY_COLOR } from '../../../utils/theme';
import { Box, Flex } from '../../ui';
import AccentBar from '../../ui/AccentBar';
import Page from '../../ui/Page';
import HeaderVisualization from './HeaderVisualization';
import ScrollNotice from './ScrollNotice';

const HeaderComponent = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const Header = () => (
  // In the header, it contains a fullpage with all of the necessary background elements
  <HeaderComponent id="/home">
    <Page backgroundColor={SECONDARY_COLOR}>
      <ScrollNotice />
      <HeaderVisualization />
      <Flex height="100vh" py={mediaQuery('10%', { mobileSmall: '35%', mobileLarge: '35%', tablet: '20%', desktopSmall: '10%' })} justify="space-between" column style={{ zIndex: 1 }}>
        <Box pr={mediaQueryLessThan('70vw', 'mobileLarge', '25vw')}>
          <AccentBar animateImmediately />
        </Box>
        <Box pl={mediaQuery('35vw', { mobileSmall: '25vw', tablet: '70vw', desktopSmall: '35vw' })}>
          <AccentBar animateImmediately reversed />
        </Box>
      </Flex>
    </Page>
  </HeaderComponent>
);

Header.displayName = 'Header';

export default Header;
