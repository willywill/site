import React from 'react';
import {
  EXTRA_DARK, WHITE, DARK_TITLE_COLOR, mediaQuery,
} from '../../../utils/theme';
import { Flex, Box, Text } from '../../ui';
import AccentBar from '../../ui/AccentBar';
import OutlineButton from '../../ui/OutlineButton';

const OpeningsSection = () => (
  <Flex as="section" id="/openings" column background={EXTRA_DARK} py="250px" align="center">
    <Box pr="25%">
      <AccentBar color={WHITE} />
    </Box>
    <Box mt={6}>
      <Text data-aos="fly-in" center extraLarge color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
        {'Openings'}
      </Text>
    </Box>
    <Box style={{ overflow: 'hidden' }} mt={4}>
      <Text data-aos="fly-in" data-aos-delay="800" large color={WHITE} weight={700} letterSpacing={-2.56}>
        {'I\'m available for work.'}
      </Text>
    </Box>
    <Box width={1} maxWidth="1280px" mt={4} px={mediaQuery(7, { mobileSmall: 3, tablet: 6 })}>
      <Text data-aos="fly-in" data-aos-delay="1200" center color={WHITE} letterSpacing={-0.3}>
        {'I\'m currently working a full-time position, but I am actively seeking a part-time role for a more continued effort or gig work related to the things I know best. '}
      </Text>
      <Box my={2} />
      <Text data-aos="fly-in" data-aos-delay="1600" center color={WHITE} letterSpacing={-0.3}>
        {'Feel free to reach out to me about what it is we can work on together. I look forward to applying my creativity and skills towards any projects neccessary.'}
      </Text>
    </Box>
    <Box mt={5} mb={6}>
      <Flex style={{ position: 'relative' }}>
        <OutlineButton width="200" height="70">
          <rect width="200" height="70" style={{ fill: 'rgba(0, 0, 0, 0)', strokeWidth: 2, stroke: 'rgb(255, 255, 255)' }} />
        </OutlineButton>
        <Text color={WHITE} thin uppercase>
          {'Get in touch'}
        </Text>
      </Flex>
    </Box>
    <Box pl="25%">
      <AccentBar reversed color={WHITE} />
    </Box>
  </Flex>
);

OpeningsSection.displayName = 'OpeningsSection';

OpeningsSection.propTypes = {

};

OpeningsSection.defaultProps = {

};

export default OpeningsSection;
