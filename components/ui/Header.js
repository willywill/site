import React from 'react';
import styled from 'styled-components';
import { Flex } from '.';
import { SECONDARY_COLOR } from '../../utils/theme';
import AccentBar from '../composite/AccentBar';
import RibbonCanvas from '../composite/RibbonCanvas';
import Page from './Page';
import Box from './styled/Box';

const HeaderComponent = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const Header = () => (
  // In the header, it contains a fullpage with all of the necessary background elements
  <HeaderComponent>
    <Page backgroundColor={SECONDARY_COLOR}>
      <RibbonCanvas />
      <Flex height="100vh" py="10%" justify="space-between" column>
        <Box pr="25vw">
          <AccentBar />
        </Box>
        <Box pl="25vw">
          <AccentBar reversed />
        </Box>
      </Flex>
    </Page>
  </HeaderComponent>
);

Header.displayName = 'Header';

export default Header;
