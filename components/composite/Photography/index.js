import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../utils/theme';
import { Flex, Box } from '../../ui';
import SectionHeading from '../SectionHeading';
import ImageItem from './ImageItem';
import ImageWrapper from './ImageWrapper';

const CameraVisualization = styled.img`
  width: 30%;
  top: 5%;
  position: absolute;
  right: -100px;
  opacity: 0.875;
  user-select: none;
  z-index: -1;
`;

const LensVisualization = styled.img`
  width: 35%;
  bottom: 5%;
  position: absolute;
  left: 100px;
  opacity: 0.4;
  user-select: none;
  z-index: -1;
`;

const PhotographySection = () => (
  <Flex id="/photography" column>
    <Flex mb={1} mr={7} column style={{ position: 'relative' }}>
      <CameraVisualization src="/mirrorless.png" />
      <Box pb={8} width={1} mt={6}>
        <SectionHeading text="Photography." position="4 / 6" />
      </Box>
      <Flex width={1} ml={6} justify="space-between" style={{ flexWrap: 'wrap' }}>
        <ImageWrapper>
          <Flex justify="center">
            <ImageItem
              src="/photos/1.jpg"
              title="Dusty Butterfly"
              description="Netus et malesuada fames ac turpis egestas integer eget aliquet"
              flip
            />
          </Flex>
        </ImageWrapper>
        <ImageWrapper>
          <Flex mt={7} justify="center">
            <ImageItem
              src="/photos/2.jpg"
              title="Autumn Tree"
              description="Netus et malesuada fames ac turpis egestas integer eget aliquet"
            />
          </Flex>
        </ImageWrapper>
        <ImageWrapper>
          <Flex justify="center">
            <ImageItem
              src="/photos/3.jpg"
              title="Ivy Leaves"
              description="Netus et malesuada fames ac turpis egestas integer eget aliquet"
              flip
            />
          </Flex>
        </ImageWrapper>
        <ImageWrapper>
          <Flex mt={7} justify="center">
            <ImageItem
              src="/photos/4.jpg"
              title="Summer Weeds"
              description="Netus et malesuada fames ac turpis egestas integer eget aliquet"
            />
          </Flex>
        </ImageWrapper>
        <LensVisualization src="/lens.png" />
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
