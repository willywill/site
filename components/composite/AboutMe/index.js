import React from 'react';
import styled from 'styled-components';
import RellaxWrapper from 'react-rellax-wrapper';
import {
  PRIMARY_COLOR, SUBTITLE_COLOR, SECONDARY_COLOR, easingFunction, mediaQuery,
} from '../../../utils/theme';
import { Flex, Box, Text } from '../../ui';
import AccentBar from '../../ui/AccentBar';
import SectionHeading from '../SectionHeading';
import CirclePortrait from './CirclePortrait';

const TriangleBackgroundElement = styled.img`
  width: 30%;
  top: 15%;
  position: absolute;
  right: 100px;
  opacity: 0.15;
  user-select: none;
`;

const CircleBackgroundElement = styled.img`
  width: 35%;
  top: 500px;
  position: absolute;
  left: 10px;
  opacity: 0.15;
  user-select: none;
`;

const AboutMeSection = () => (
  <Flex id="/about" background={SECONDARY_COLOR} pb={7} column style={{ overflow: 'hidden' }}>
    <Box mt={6}>
      <SectionHeading text="About Me." position="5 / 6" flip />
    </Box>
    <Flex column style={{ position: 'relative' }}>
      <RellaxWrapper speed={2} percentage={0.9} style={{ transition: `transform 1.2s ${easingFunction}` }}>
        <TriangleBackgroundElement src="/triangle.svg" />
      </RellaxWrapper>
      <RellaxWrapper speed={-2} percentage={0.9} style={{ transition: `transform 1.2s ${easingFunction}` }}>
        <CircleBackgroundElement src="/circle.svg" />
      </RellaxWrapper>
    </Flex>
    <Flex mt={5} width={1} align="center" column>
      <Box mb={6} pr="25%">
        <AccentBar />
      </Box>
      <Box mb={5}>
        <CirclePortrait data-aos="fade-in" />
      </Box>
      <Text data-aos="fly-in" extraLarge bold color={PRIMARY_COLOR} letterSpacing={-2.56}>
        {'Hi, I\'m William Germany.'}
      </Text>
      <Box mt={4} width={mediaQuery(0.4, { tablet: 0.75 })}>
        <Text center data-aos="fly-in" data-aos-delay="800" fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
          {'I have a strong passion for technology, programming, mathematics and art. I taught myself different ways to apply these concepts to build '}<strong style={{ fontWeight: 'bolder' }}>creative</strong>{' solutions to real world problems.'}
        </Text>
        <Box mt={4}>
          <Text center data-aos="fly-in" data-aos-delay="1000" fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
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
