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
  opacity: 0.4;
  user-select: none;
  z-index: -1;

  @media (max-width: ${breakpoints.desktopSmall}) {
    width: 45%;
    top: 8%;
    right: -200px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
    top: 5%;
    right: 0px;
  }
`;

const LensVisualization = styled.img`
  width: 35%;
  max-width: 700px;
  bottom: 0%;
  position: absolute;
  left: 100px;
  opacity: 0.2;
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
    <Flex mb={1} column style={{ position: 'relative', overflow: 'hidden' }}>
      <CameraVisualization src="/visualizations/mirrorless.webp" alt="Mirrorless Outline Drawing" />
      <Box width={1} mt={6}>
        <SectionHeading text="Photography." position="4 / 6" />
      </Box>
      <Flex width={1} mr={6} ml={4} mt={5} mb={8} align="center" column>
        <Flex
          width={1}
          justify="center"
          flexDirection={mediaQueryLessThan('row', 'tablet', 'column')}
        >
          <Box mb={5} width={mediaQueryLessThan(0.35, 'tablet', 1)}>
            <ImageWrapper>
              <Flex ml={mediaQueryLessThan('0px', 'tablet', '15px')} justifyContent={mediaQueryLessThan('flex-end', 'tablet', 'center')}>
                <ImageItem
                  src="/photography/photo-1.webp"
                  title="Sunrise Portrait"
                  description="A capture from morning with a very glowy ambient and indirect light"
                  flip
                />
              </Flex>
            </ImageWrapper>
          </Box>
          <Box width={mediaQuery(0.15, { mobileSmall: '0px', desktopSmall: 0.05 })} />
          <Box mb={5} width={mediaQueryLessThan(0.35, 'tablet', 1)}>
            <ImageWrapper>
              <Flex mr={mediaQueryLessThan('0px', 'tablet', '35px')} mt={mediaQueryLessThan(7, 'tablet', '0px')} justifyContent={mediaQueryLessThan('flex-start', 'tablet', 'center')}>
                <ImageItem
                  src="/photography/photo-2.webp"
                  title="Antique Winery"
                  description="An all encompassing glance at one of the oldest wineries in Ohio"
                />
              </Flex>
            </ImageWrapper>
          </Box>
        </Flex>
        <Flex
          mt={4}
          width={1}
          justify="center"
          flexDirection={mediaQueryLessThan('row', 'tablet', 'column')}
        >
          <Box width={mediaQueryLessThan(0.35, 'tablet', 1)}>
            <ImageWrapper>
              <Flex justifyContent={mediaQueryLessThan('flex-end', 'tablet', 'center')}>
                <ImageItem
                  src="/photography/photo-4.webp"
                  title="Snowy Dog"
                  description="Playful dog captured while walking through the snow"
                  flip
                />
              </Flex>
            </ImageWrapper>
          </Box>
          <Box width={mediaQuery(0.15, { mobileSmall: '0px', desktopSmall: 0.05 })} />
          <Box mt={6} width={mediaQueryLessThan(0.35, 'tablet', 1)}>
            <ImageWrapper>
              <Flex mr={mediaQueryLessThan('0px', 'tablet', '35px')} mt={mediaQueryLessThan(5, 'tablet', '0px')} justifyContent={mediaQueryLessThan('flex-start', 'tablet', 'center')}>
                <ImageItem
                  src="/photography/photo-3.webp"
                  title="Prom Night"
                  description="Golden hour shot of a prom night couple perfectly rim lit"
                />
              </Flex>
            </ImageWrapper>
          </Box>
          <LensVisualization src="/visualizations/lens.png" alt="Camera Lens Exploded View" />
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

export default PhotographySection;
