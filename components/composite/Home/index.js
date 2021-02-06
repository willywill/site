import React from 'react';
import { PRIMARY_COLOR, SUBTITLE_COLOR } from '../../../utils/theme';
import { Flex, Box, Text } from '../../ui';

const HomeSection = () => (
  <Flex width={1}>
    <Box width={0.6}>
      <Flex width={1} height="calc(100vh - 62px)" align="center" justify="center" column>
        <Flex width={1} px="15%" pb={1} style={{ overflow: 'hidden' }}>
          <Text data-aos="fly-in" center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
            {'Building digital products, immersive visuals, and capturing moments.'}
          </Text>
        </Flex>
        <Box maxWidth={600} mt={4}>
          <Text data-aos="fly-in" data-aos-delay="400" center fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
            {`I'm a self-taught software engineer
working on full-stack web development, real-time computer graphics and photography.`}
          </Text>
        </Box>
      </Flex>
    </Box>
    <Box width={0.4} />
  </Flex>
);

HomeSection.displayName = 'HomeSection';

HomeSection.propTypes = {

};

HomeSection.defaultProps = {

};

export default HomeSection;
