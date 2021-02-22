import React from 'react';
import RibbonCanvas from '../components/composite/RibbonCanvas';
import { Box, Flex, Heading } from '../components/ui';
import Page from '../components/ui/Page';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/theme';
import HomeButton from '../components/ui/HomeButton';

const Custom404Page = () => (
  <header>
    <Page backgroundColor={SECONDARY_COLOR}>
      <Flex width={1} mt={4} mr={4} justify="flex-end" align="center">
        <HomeButton />
      </Flex>
      <Flex height="calc(100vh - 62px)" py="10%" justify="center" align="center" column style={{ zIndex: 1 }}>
        <Box my={7}>
          <Heading size={1} data-aos="fly-in" center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
            {'404 - Sorry this page does not exist.'}
          </Heading>
        </Box>
      </Flex>
      <RibbonCanvas opacity={0.15} />
    </Page>
  </header>
);

Custom404Page.displayName = 'Custom404Page';

export default Custom404Page;
