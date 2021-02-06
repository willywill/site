import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import {
  PRIMARY_COLOR, SECONDARY_COLOR, easingFunction,
} from '../../../utils/theme';
import { Flex, Box } from '../../ui';
import SectionHeading from '../SectionHeading';
import ImageBackground from './ImageBackground';

const PhotographySection = () => (
  <Flex column>
    <Flex mb={7} mr={7} column>
      <Box pb={7} width={1} mt={6}>
        <SectionHeading text="Photography." position="4 / 6" />
      </Box>
      <Flex width={1} ml={6} justify="space-between" style={{ flexWrap: 'wrap' }}>
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
