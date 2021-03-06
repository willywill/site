import React from 'react';
import {
  PRIMARY_COLOR, SECONDARY_COLOR, SUBTITLE_COLOR, WHITE,
} from '../../../utils/theme';
import { Flex, Text } from '../../ui';
import SectionHeading from '../SectionHeading';
import CountUpNumber from './CountUpNumber';
import OverviewContainer from './OverviewContainer';
import OverviewItem from './OverviewItem';

const OverviewSection = () => (
  <Flex as="section" id="/my-work" mt={5} pt={2} backgroundColor={WHITE} column style={{ overflowX: 'hidden' }}>
    <SectionHeading text="At A Glance." position="1 / 6" />
    <Flex width={1} mt={4} mb={4} justify="center">
      <OverviewContainer>
        <OverviewItem
          title="Computer Graphics"
          description="Photorealistic Visuals"
          imageUrl="/overview/minecraft.webp"
          link="/computer-graphics"
        />
        <OverviewItem
          title="Web Development"
          description="Engaging Products"
          imageUrl="overview/code.webp"
          link="/web-development"
        />
        <OverviewItem
          title="Photography"
          description="Surreal Memories"
          imageUrl="overview/photography.webp"
          link="/photography"
        />
      </OverviewContainer>
    </Flex>
    <Flex data-aos="fly-in" data-aos-offset="-50" id="count-up" mt={5} width={1} justify="center">
      <Flex mx={5} align="center" column>
        <CountUpNumber end="307" />
        <Text center color={SUBTITLE_COLOR}>
          {'Shaders Written'}
        </Text>
      </Flex>
      <Flex mr={5} align="center" column>
        <CountUpNumber end="12954" />
        <Text center color={SUBTITLE_COLOR}>
          {'Code Commits'}
        </Text>
      </Flex>
      <Flex mr={5} align="center" column>
        <CountUpNumber end="6283" />
        <Text center color={SUBTITLE_COLOR}>
          {'Photos Taken'}
        </Text>
      </Flex>
    </Flex>
    <Flex width={0.5} mt={6} background={SECONDARY_COLOR} style={{ position: 'relative' }}>
      <Flex height="200px" mt="-1px">
        <div style={{
          width: '100px',
          height: '4px',
          backgroundColor: PRIMARY_COLOR,
          position: 'absolute',
          right: '-50px',
          top: '100px',
        }}
        />
      </Flex>
    </Flex>
  </Flex>
);

OverviewSection.displayName = 'OverviewSection';

export default OverviewSection;
