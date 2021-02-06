import React from 'react';
import {
  DARK_TITLE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SUBTITLE_COLOR, WHITE,
} from '../../../utils/theme';
import { Box, Flex, Text } from '../../ui';
import CountUpNumber from './CountUpNumber';
import OverviewContainer from './OverviewContainer';
import OverviewItemContainer from './OverviewItemContainer';

const OverviewSection = () => (
  <Flex id="/my-work" mt={5} backgroundColor={WHITE} column>
    <Flex ml={7}>
      <Text small color={DARK_TITLE_COLOR}>
        {'1 / 6'}
      </Text>
      <Flex column>
        <Text data-aos="fly-in" data-aos-offset="500" center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
          {'At A Glance.'}
        </Text>
        <div style={{
          opacity: 0.7, height: '5px', width: '100%', backgroundColor: SUBTITLE_COLOR, marginTop: '10px', marginLeft: '20px',
        }}
        />
      </Flex>
    </Flex>
    <Flex width={1} mt={4} mb={4} justify="center">
      <OverviewContainer>
        <OverviewItemContainer width="25vw" height={700} p={4} url="/minecraft.png">
          <Text medium bold color={WHITE} letterSpacing={-1.56}>
            {'Computer Graphics'}
          </Text>
          <Box mt={3}>
            <Text large bold color={WHITE} letterSpacing={-1.56}>
              {'Photorealistic Visuals'}
            </Text>
            <div
              data-aos="slide-left"
              style={{
                opacity: 1.0, height: '5px', width: '100%', backgroundColor: PRIMARY_COLOR, marginTop: '5px', transform: 'translateX(10px)',
              }}
            />
          </Box>
        </OverviewItemContainer>
        <OverviewItemContainer width="25vw" height={700} p={4} url="/code.png">
          <Text medium bold color={WHITE} letterSpacing={-1.56}>
            {'Web Development'}
          </Text>
          <Box mt={3}>
            <Text large bold color={WHITE} letterSpacing={-1.56}>
              {'Engaging Products'}
            </Text>
            <div
              data-aos="slide-left"
              style={{
                opacity: 1.0, height: '5px', width: '100%', backgroundColor: PRIMARY_COLOR, marginTop: '5px', transform: 'translateX(10px)',
              }}
            />
          </Box>
        </OverviewItemContainer>
        <OverviewItemContainer width="25vw" height={700} p={4} url="/photography.png">
          <Text medium bold color={WHITE} letterSpacing={-1.56}>
            {'Photography'}
          </Text>
          <Box mt={3}>
            <Text large bold color={WHITE} letterSpacing={-1.56}>
              {'Surreal Memories'}
            </Text>
            <div
              data-aos="slide-left"
              style={{
                opacity: 1.0, height: '5px', width: '100%', backgroundColor: PRIMARY_COLOR, marginTop: '5px', transform: 'translateX(10px)',
              }}
            />
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
