import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import {
  PRIMARY_COLOR, DARK_TITLE_COLOR, SUBTITLE_COLOR, SECONDARY_COLOR,
  easingFunction,
} from '../../../utils/theme';
import { Flex, Text } from '../../ui';
import ImageBackground from './ImageBackground';

const PhotographySection = () => (
  <Flex column>
    <Flex mb={7} mx={7} column>
      <Flex pb={7} width={1} mt={6} justify="flex-start">
        <Text small color={DARK_TITLE_COLOR}>
          {'4 / 6'}
        </Text>
        <Flex column>
          <Text data-aos="fly-in" extraLarge bold color={PRIMARY_COLOR} letterSpacing={-2.56}>
            {'Photography.'}
          </Text>
          <div
            data-aos="slide-left"
            style={{
              opacity: 0.7, height: '5px', width: '100%', backgroundColor: SUBTITLE_COLOR, marginTop: '10px', transform: 'translateX(20px)',
            }}
          />
        </Flex>
      </Flex>
      <Flex width={1} justify="space-between" style={{ flexWrap: 'wrap' }}>
        <RellaxWrapper
          speed={2}
          vertical
          style={{ width: '50%', height: '1000px', transition: `transform 0.7s ${easingFunction}` }}
        >
          <Flex justify="center">
            <ImageBackground />
          </Flex>
        </RellaxWrapper>
        <RellaxWrapper
          speed={2}
          vertical
          style={{ width: '50%', height: '1000px', transition: `transform 0.7s ${easingFunction}` }}
        >
          <Flex mt={7} justify="center">
            <ImageBackground />
          </Flex>
        </RellaxWrapper>
        <RellaxWrapper
          speed={2}
          vertical
          style={{ width: '50%', height: '1000px', transition: `transform 0.7s ${easingFunction}` }}
        >
          <Flex justify="center">
            <ImageBackground />
          </Flex>
        </RellaxWrapper>
        <RellaxWrapper
          speed={2}
          vertical
          style={{ width: '50%', height: '1000px', transition: `transform 0.7s ${easingFunction}` }}
        >
          <Flex mt={7} justify="center">
            <ImageBackground />
          </Flex>
        </RellaxWrapper>
      </Flex>
    </Flex>
    <Flex width={0.5} background={SECONDARY_COLOR} style={{ position: 'relative' }}>
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

PhotographySection.displayName = 'PhotographySection';

PhotographySection.propTypes = {

};

PhotographySection.defaultProps = {

};

export default PhotographySection;
