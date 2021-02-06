import React from 'react';
import {
  PRIMARY_COLOR, SECONDARY_COLOR, SUBTITLE_COLOR, WHITE,
} from '../../../utils/theme';
import { Box, Flex, Text } from '../../ui';
import SectionHeading from '../SectionHeading';
import CountUpNumber from './CountUpNumber';
import OverviewContainer from './OverviewContainer';
import OverviewItemContainer from './OverviewItemContainer';

const OverviewSection = () => (
  <Flex id="/my-work" mt={5} backgroundColor={WHITE} column>
    <SectionHeading text="At A Glance." position="1 / 6" animationProps={{ 'data-aos-offset': 500 }} />
    <Flex width={1} mt={4} mb={4} justify="center">
      <OverviewContainer>
        <OverviewItemContainer url="/minecraft.png" link="/computer-graphics">
          <Text medium bold color={WHITE} letterSpacing={-1.56}>
            {'Computer Graphics'}
          </Text>
          <Box mt={3}>
            <Text data-aos="fly-in" large bold color={WHITE} letterSpacing={-1.56}>
              {'Photorealistic Visuals'}
            </Text>
          </Box>
        </OverviewItemContainer>
        <OverviewItemContainer url="/code.png" link="/web-development">
          <Text medium bold color={WHITE} letterSpacing={-1.56}>
            {'Web Development'}
          </Text>
          <Box mt={3}>
            <Text data-aos="fly-in" large bold color={WHITE} letterSpacing={-1.56}>
              {'Engaging Products'}
            </Text>
          </Box>
        </OverviewItemContainer>
        <OverviewItemContainer url="/photography.png" link="/photography">
          <Text medium bold color={WHITE} letterSpacing={-1.56}>
            {'Photography'}
          </Text>
          <Box mt={3}>
            <Text data-aos="fly-in" large bold color={WHITE} letterSpacing={-1.56}>
              {'Surreal Memories'}
            </Text>
          </Box>
        </OverviewItemContainer>
      </OverviewContainer>
    </Flex>
    <Flex data-aos="fly-in" id="count-up" mt={5} width={1} justify="center">
      <Flex mr={5} column>
        <CountUpNumber end="218" />
        <Text color={SUBTITLE_COLOR}>
          {'Shaders Written'}
        </Text>
      </Flex>
      <Flex mr={5} column>
        <CountUpNumber end="12853" />
        <Text color={SUBTITLE_COLOR}>
          {'Code Commits'}
        </Text>
      </Flex>
      <Flex mr={5} column>
        <CountUpNumber end="5011" />
        <Text color={SUBTITLE_COLOR}>
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
