import React from 'react';
import FlyUpText from '../components/composite/FlyUpText';
import { Flex, Box } from '../components/ui';
import Header from '../components/ui/Header';
import Navbar from '../components/ui/Navbar';
import { PRIMARY_COLOR, SUBTITLE_COLOR } from '../utils/theme';

const AboutPage = () => {
  const text = 'Let me take you on a journey.';

  return (
    <>
      <Header />
      <Navbar />
      <Flex width={1} height="calc(100vh - 62px)" align="center" justify="center" column>
        <Flex width={1} px="15%" pb={1} style={{ overflow: 'hidden' }} justify="center">
          <FlyUpText center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
            {text}
          </FlyUpText>
        </Flex>
        <Box maxWidth={600} mt={4}>
          <FlyUpText center delayMultiplier={2} fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
            {'This is my story.'}
          </FlyUpText>
        </Box>
      </Flex>
    </>
  );
};

AboutPage.displayName = 'AboutPage';

AboutPage.propTypes = {

};

AboutPage.defaultProps = {

};

export default AboutPage;
