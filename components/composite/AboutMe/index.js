import React from 'react';
import {
  PRIMARY_COLOR, DARK_TITLE_COLOR, SUBTITLE_COLOR, SECONDARY_COLOR,
} from '../../../utils/theme';
import { Flex, Box, Text } from '../../ui';
import AccentBar from '../../ui/AccentBar';
import CirclePortrait from './CirclePortrait';

const AboutMeSection = () => (
  <Flex background={SECONDARY_COLOR} pb={7} column>
    <Flex pr={7} width={1} mt={6} justify="flex-end">
      <Text small color={DARK_TITLE_COLOR}>
        {'5 / 6'}
      </Text>
      <Flex column>
        <Text data-aos="fly-in" extraLarge bold color={PRIMARY_COLOR} letterSpacing={-2.56}>
          {'About Me.'}
        </Text>
        <div
          data-aos="slide-left"
          style={{
            opacity: 0.7, height: '5px', width: '100%', backgroundColor: SUBTITLE_COLOR, marginTop: '10px', transform: 'translateX(-20px)',
          }}
        />
      </Flex>
    </Flex>
    <Flex mt={5} width={1} align="center" column>
      <Box mb={6} pr="25%">
        <AccentBar />
      </Box>
      <Box mb={5}>
        <CirclePortrait />
      </Box>
      <Text data-aos="fly-in" extraLarge bold color={PRIMARY_COLOR} letterSpacing={-2.56}>
        {'Hi, I\'m William Germany.'}
      </Text>
      <Box mt={4} width={0.4}>
        <Text center data-aos="fly-in" data-aos-delay="800" fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3} dange>
          {'I have a strong passion for technology, programming, mathematics and art. I taught myself different ways to apply these concepts to build '}<strong style={{ fontWeight: 'bolder' }}>creative</strong>{' solutions to real world problems.'}
        </Text>
        <Box mt={4}>
          <Text center data-aos="fly-in" data-aos-delay="1000" fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3} dange>
            {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit '}<strong style={{ fontWeight: 'bolder' }}>accusantium nulla quae saepe</strong>{' ullam veritatis quos commodi ex dolorum reprehenderit voluptate aliquam itaque, laboriosam unde!'}
          </Text>
        </Box>
      </Box>
      <Box mt={6} pl="25%">
        <AccentBar reversed />
      </Box>
    </Flex>
  </Flex>
);

AboutMeSection.displayName = 'AboutMeSection';

export default AboutMeSection;
