import React from 'react';
import styled from 'styled-components';
import RellaxWrapper from 'react-rellax-wrapper';
import {
  PRIMARY_COLOR, SUBTITLE_COLOR, SECONDARY_COLOR, easingFunction, mediaQueryLessThan,
  breakpoints,
} from '../../../utils/theme';
import { Flex, Box, Text } from '../../ui';
import AccentBar from '../../ui/AccentBar';
import SectionHeading from '../SectionHeading';
import CirclePortrait from './CirclePortrait';

const TriangleBackgroundElement = styled.img`
  width: 30%;
  max-width: 600px;
  top: 250px;
  position: absolute;
  right: 100px;
  opacity: 0.15;
  transform: rotateZ(5deg);
  user-select: none;

  @media (max-width: ${breakpoints.mobileLarge}) {
    top: 383px;
    right: -20px;
    width: 60%;
  }
`;

const CircleBackgroundElement = styled.img`
  width: 35%;
  max-width: 600px;
  top: 640px;
  position: absolute;
  left: 10px;
  opacity: 0.15;
  user-select: none;

  @media (max-width: ${breakpoints.mobileLarge}) {
    left: -40px;
    width: 60%;
  }
`;

const getYearsOfExperience = () => (new Date().getFullYear()) - 2012;

const AboutMeSection = () => (
  <Flex as="section" id="/about" background={SECONDARY_COLOR} pb={7} column style={{ overflow: 'hidden' }}>
    <Box mt={6}>
      <SectionHeading text="About Me." position="5 / 6" flip />
    </Box>
    <Flex column style={{ position: 'relative' }}>
      <RellaxWrapper speed={2} percentage={0.9} style={{ transition: `transform 1.2s ${easingFunction}` }}>
        <TriangleBackgroundElement src="/visualizations/triangle.svg" alt="Triangle Background Element" />
      </RellaxWrapper>
      <RellaxWrapper speed={-2} percentage={0.9} style={{ transition: `transform 1.2s ${easingFunction}` }}>
        <CircleBackgroundElement src="/visualizations/circle.svg" alt="Circle Background Element" />
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
      <Box mt={4} width={mediaQueryLessThan(0.4, 'tablet', 0.75)}>
        <Text center data-aos="fly-in" data-aos-delay="800" fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
          {'I have a strong passion for technology, programming, mathematics and art. I taught myself different ways to apply these concepts to build '}<strong style={{ fontWeight: 'bolder' }}>creative</strong>{' solutions to real world problems.'}
        </Text>
        <Box mt={4}>
          <Text center data-aos="fly-in" data-aos-delay="1000" fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
            {'Roughly '}<strong style={{ fontWeight: 'bolder' }}>{getYearsOfExperience()}{' years of experience'}</strong>{', from tinkering with files to enhance video games, developing complex 3D games with groups, being the lead programmer on the robotics team, to making full on production applications used by Fortune 500 companies.'}
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
