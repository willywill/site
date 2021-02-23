import React from 'react';
import {
  mediaQuery, mediaQueryLessThan, PRIMARY_COLOR,
  SECONDARY_COLOR, WHITE,
} from '../../../utils/theme';
import { Box, Flex } from '../../ui';
import GalleryView from '../GalleryView';
import MovingCubesComponent from '../MovingCubes';
import SectionHeading from '../SectionHeading';

const cg = {
  pbrSky: {
    title: 'Physically-based Sky',
    description: 'A real-time sky simulation that samples the atmosphere based on real properties of light entering and scattering throughout the atmosphere. This solution accounts for volumetric fog and includes a simple volumetric cloud solution.',
    gallery: [
      { broken: '/pbr-sky-1.jpg', isVideo: false, isMain: true, mediaProps: {} },
      { broken: '/videos/pbr-sky.mp4', isVideo: true, isMain: false, mediaProps: {} },
      { broken: '/videos/pbr-clouds.mp4', isVideo: true, isMain: false, mediaProps: {} },
      { broken: '/pbr-sky-2.png', isVideo: false, isMain: false, mediaProps: {} },
    ],
    flip: false,
  },
  oceanRendering: {
    title: 'Ocean Rendering',
    description: 'A real-time ocean simulation that respects wind speeds that shape the waves, and responds to the Sun\'s angle to create reflections and scatter light appropriately throughout the surface of the water.',
    gallery: [
      { broken: '/ocean.png', isVideo: false, isMain: true, mediaProps: {} },
      { broken: '/videos/ocean.mp4', isVideo: true, isMain: false, mediaProps: {} },
      { broken: '/ocean2.png', isVideo: false, isMain: false, mediaProps: {} },
      { broken: '/videos/ocean2.mp4', isVideo: true, isMain: false, mediaProps: {} },
    ],
    flip: true,
  },
  cameraSimulation: {
    title: 'Camera Simulation',
    description: 'A-real time camera simulation that acts as a modern digital camera with ISO control, aperture control, and shutter speed control. Also features multiple metering modes for auto exposure and cinematic lens properties for creating anamorphic bokeh. Additionally, there is some custom-made lens flare effects, creating a realistic starburst effect on bright surfaces.',
    gallery: [
      { broken: '/camera2.png', isVideo: false, isMain: true, mediaProps: {} },
      { broken: '/camera.png', isVideo: false, isMain: false, mediaProps: {} },
      { broken: '/videos/camera.mp4', isVideo: true, isMain: false, mediaProps: {} },
      { broken: '/camera1.jpg', isVideo: false, isMain: false, mediaProps: {} },
    ],
    flip: false,
  },
};

const ComputerGraphicsSection = () => (
  <Flex as="section" id="/computer-graphics" column style={{ overflowX: 'hidden' }}>
    <Box mt={6}>
      <SectionHeading text="Computer Graphics." position="2 / 6" />
    </Box>
    <Flex width={1} mb={5} mt={mediaQueryLessThan(5, 'mobileLarge', '0px')} justify="flex-end" style={{ position: 'relative' }}>
      <MovingCubesComponent />
    </Flex>
    <Flex mx={mediaQuery(6, { mobileLarge: '90px', tablet: '90px', desktopExtraLarge: 7, desktop4K: 8 })} mt={mediaQuery(2, { tablet: 5 })} mb={6} column>
      <Box>
        <GalleryView
          title={cg.pbrSky.title}
          description={cg.pbrSky.description}
          gallery={cg.pbrSky.gallery}
          flip={cg.pbrSky.flip}
        />
      </Box>
      <Box mt={5}>
        <GalleryView
          title={cg.oceanRendering.title}
          description={cg.oceanRendering.description}
          gallery={cg.oceanRendering.gallery}
          flip={cg.oceanRendering.flip}
        />
      </Box>
      <Box mt={5}>
        <GalleryView
          title={cg.cameraSimulation.title}
          description={cg.cameraSimulation.description}
          gallery={cg.cameraSimulation.gallery}
          flip={cg.cameraSimulation.flip}
        />
      </Box>
    </Flex>
    <Flex mt={4}>
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
      <Flex width={0.5} background={WHITE} />
    </Flex>
  </Flex>
);

ComputerGraphicsSection.displayName = 'ComputerGraphicsSection';

export default ComputerGraphicsSection;
