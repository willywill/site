import React from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from '../../../utils/theme';
import { Box, Flex } from '../../ui';
import GalleryView from '../GalleryView';
import MovingCubesComponent from '../MovingCubes';
import SectionHeading from '../SectionHeading';

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
          title="Physically-based Sky"
          description="Urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper"
          images={[]}
        />
      </Box>
      <Box mt={5}>
        <GalleryView
          title="Ocean Rendering"
          description="Urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper"
          images={[]}
          flip
        />
      </Box>
      <Box mt={5}>
        <GalleryView
          title="Camera Simulation"
          description="Urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper"
          images={[]}
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
