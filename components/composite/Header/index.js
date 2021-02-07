import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../../utils/theme';
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
      <Flex height="100vh" py="10%" justify="space-between" column style={{ zIndex: 1 }}>
        <Box pr="70vw">
          <AccentBar />
        </Box>
        <Box pl="35vw">
          <AccentBar reversed />
        </Box>
      </Flex>
    </Page>
  </HeaderComponent>
);

Header.displayName = 'Header';

export default Header;
