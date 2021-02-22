import React from 'react';
import styled from 'styled-components';
import {
  breakpoints, mediaQuery, mediaQueryLessThan, PRIMARY_COLOR, SECONDARY_COLOR,
} from '../../../utils/theme';
import { Flex, Box } from '../../ui';
import SectionHeading from '../SectionHeading';
import ImageItem from './ImageItem';
import ImageWrapper from './ImageWrapper';

const CameraVisualization = styled.img`
  width: 30%;
  max-width: 600px;
  top: 5%;
  position: absolute;
  right: -100px;
  opacity: 0.875;
  user-select: none;
  z-index: -1;

  @media (max-width: ${breakpoints.desktopSmall}) {
    width: 45%;
    top: 8%;
    right: -200px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 60%;
    top: 5%;
    right: 0px;
  }
`;

const LensVisualization = styled.img`
  width: 35%;
  max-width: 700px;
  bottom: 5%;
  position: absolute;
  left: 100px;
  opacity: 0.4;
  user-select: none;
  z-index: -1;

  @media (max-width: ${breakpoints.desktopSmall}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 200px;
  }
`;

const PhotographySection = () => (
  <Flex as="section" id="/photography" column>
    <Flex mb={1} mr={mediaQueryLessThan(7, 'mobileLarge', 6)} column style={{ position: 'relative' }}>
      <CameraVisualization src="/mirrorless.png" />
      <Box pb={8} width={1} mt={6}>
        <SectionHeading text="Photography." position="4 / 6" />
      </Box>
      <Flex width={1} mr={6} ml={mediaQueryLessThan(6, 'mobileLarge', '80px')} justify="center">
        <Flex
          width={mediaQuery(1, { desktopExtraLarge: 0.65, desktop4K: 0.55 })}
          ml={mediaQueryLessThan(6, 'mobileLarge', 5)}
          justify="space-between"
          style={{ flexWrap: 'wrap' }}
          flexDirection={mediaQueryLessThan('row', 'tablet', 'column')}
        >
          <ImageWrapper>
            <Flex justify="center">
              <ImageItem
                src="/photos/portrait1.JPG"
                title="Sunrise Portrait"
                description="A capture from morning with a very glowy ambient and indirect light"
                flip
              />
            </Flex>
          </ImageWrapper>
          <ImageWrapper>
            <Flex mt={mediaQueryLessThan(7, 'tablet', '0px')} justify="center">
              <ImageItem
                src="/photos/portrait2.JPG"
                title="Antique Winery"
                description="An all encompasing glance at one of the oldest wineries in Ohio"
              />
            </Flex>
          </ImageWrapper>
          <ImageWrapper>
            <Flex justify="center">
              <ImageItem
                src="/photos/portrait5.jpg"
                title="Snowy Dog"
                description="Playful dog captured while walking through the snow"
                flip
              />
            </Flex>
          </ImageWrapper>
          <ImageWrapper>
            <Flex mt={mediaQuery(7, 'tablet', '0px')} justify="center">
              <ImageItem
                src="/photos/portrait4.JPG"
                title="Prom Night"
                description="Golden hour shot of a prom night couple perfectly rim lit"
              />
            </Flex>
          </ImageWrapper>
          <LensVisualization src="/lens.png" />
        </Flex>
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
