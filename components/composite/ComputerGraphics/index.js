import React from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from '../../../utils/theme';
import { Box, Flex } from '../../ui';
import GalleryView from '../GalleryView';
import MovingCubesComponent from '../MovingCubes';
import SectionHeading from '../SectionHeading';

const sampleDescription = `Urna molestie at elementum eu facilisis sed odio morbi 
quis commodo odio aenean sed adipiscing diam donec adipiscing 
tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper`;

const cg = {
  pbrSky: {
    title: 'Physically-based Sky',
    description: sampleDescription,
    gallery: [
      { src: '/videos/pbr-sky.mp4', isVideo: true, isMain: true, mediaProps: {} },
      { src: '/videos/pbr-clouds.mp4', isVideo: true, isMain: false, mediaProps: {} },
      { src: '/pbr-sky-1.jpg', isVideo: false, isMain: false, mediaProps: {} },
      { src: '/pbr-sky-2.png', isVideo: false, isMain: false, mediaProps: {} },
    ],
    flip: false,
  },
  oceanRendering: {
    title: 'Ocean Rendering',
    description: sampleDescription,
    gallery: [
      { src: '/videos/ocean.mp4', isVideo: true, isMain: true, mediaProps: {} },
      { src: '/ocean.png', isVideo: false, isMain: false, mediaProps: {} },
      { src: '/ocean2.png', isVideo: false, isMain: false, mediaProps: {} },
      { src: '/videos/ocean2.mp4', isVideo: true, isMain: false, mediaProps: {} },
    ],
    flip: true,
  },
  cameraSimulation: {
    title: 'Camera Simulation',
    description: sampleDescription,
    gallery: [
      { src: '/videos/camera.mp4', isVideo: true, isMain: true, mediaProps: {} },
      { src: '/camera.png', isVideo: false, isMain: false, mediaProps: {} },
      { src: '/camera1.jpg', isVideo: false, isMain: false, mediaProps: {} },
      { src: '/camera2.png', isVideo: false, isMain: false, mediaProps: {} },
    ],
    flip: false,
  },
};

const ComputerGraphicsSection = () => (
  <Flex id="/computer-graphics" column>
    <Box mt={6}>
      <SectionHeading text="Computer Graphics." position="2 / 6" />
    </Box>
    <Flex width={1} my={1} justify="flex-end">
      <MovingCubesComponent />
    </Flex>
    <Flex mx={6} mt={2} mb={6} column>
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
    {/* <Flex>
      <Box width={0.5}>
        <Text data-aos="fly-in" large bold color={DARK_TITLE_COLOR} letterSpacing={-2.56}>
          {'Ocean Rendering'}
          <img width="100%" height="600px" src="/ocean.png" alt="Ocean Rendering" />
        </Text>
      </Box>
      <Box width={0.5}>
        <Text data-aos="fly-in" large bold color={DARK_TITLE_COLOR} letterSpacing={-2.56}>
          {'Camera Simulation'}
          <img width="100%" height="600px" src="/camera.png" alt="Ocean Rendering" />
        </Text>
      </Box>
    </Flex> */}
    {/* <Flex width={1} justify="center" style={{ position: 'relative' }}>
      <video width="1920px" loop autoPlay muted style={{ outline: 'none', position: 'relative' }}>
        <source src="/videos/pbr-sky.mp4" type="video/mp4" />
        <track kind="captions" />
      </video>
      <Box mt={5} ml={5} style={{ zIndex: 3, position: 'absolute', left: 0 }}>
        <Text data-aos="fly-in" extraLarge bold color={WHITE} letterSpacing={-2.56}>
          {'Physically-based Sky'}
        </Text>
        <div
          data-aos="slide-left"
          style={{
            opacity: 0.7, height: '5px', width: '100%', backgroundColor: PRIMARY_COLOR, marginTop: '10px', transform: 'translateX(20px)',
          }}
        />
      </Box>
    </Flex> */}
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
