/* global document, window */
import React, { useEffect } from 'react';
import throttle from 'lodash/fp/throttle';
import styled, { keyframes } from 'styled-components';
import { Flex } from '.';
import { DARK_TITLE_COLOR, easingFunction, SECONDARY_COLOR, SUBTITLE_COLOR } from '../../utils/theme';
import AccentBar from '../composite/AccentBar';
// import RibbonCanvas from '../composite/RibbonCanvas';
import Page from './Page';
import Box from './styled/Box';
import Text from './styled/Text';

const HeaderComponent = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const fadeOutBackground = keyframes`
  from {
    opacity: 1.0;
    transform: scaleY(-1) translateY(700px);
  }

  to {
    opacity: 0.1;
    transform: scaleY(-1) translateY(600px);
  }
`;

// const BackgroundImage = styled.div`
//   width: 100vw;
//   height: 100vh;
//   position: absolute;
//   background-image: url('/background2.png');
//   transform: scaleY(-1);
//   filter: hue-rotate(3deg);
//   background-size: cover;
//   background-position: center;
//   background-repeat: repeat-y;
//   animation: ${fadeOutBackground} 3.5s ${easingFunction};
//   animation-fill-mode: forwards;
// `;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/scene.png');
  background-size: cover;
  background-position: 400px 0px;
  transform: scaleX(1);
  background-repeat: no-repeat;
  opacity: 0.0;
  position: absolute;
  transition: background-position 1s ${easingFunction};
  animation: ${fadeIn} 0.4s 0.5s ${easingFunction};
  /* animation: ${fadeOutBackground} 1.5s ${easingFunction}; */
  animation-fill-mode: forwards;
`;

const BallBackground = () => {
  const parallax = (e) => {
    const elem1 = document.querySelector('#parallax1');
    // const elem2 = document.querySelector('#parallax2');
    // const elem3 = document.querySelector('#parallax3');
    const w = window.innerWidth / 2;
    const h = window.innerHeight / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // const depth1 = `${50 - (mouseX - w) * 0.01}px ${50 - (mouseY - h) * 0.01}px`;
    // const depth2 = `${50 - (mouseX - w) * 0.2}px ${50 - (mouseY - h) * 0.2}px`;
    const depth3 = `${325 - (mouseX - w) * 0.05}px ${50 - (mouseY - h) * 0.08}px`;
    const x = `${depth3}`;
    // const y = `${depth2}`;
    // const z = `${depth1}`;
    if (elem1 && elem1.style) {
      elem1.style.backgroundPosition = x;
      // elem2.style.backgroundPosition = y;
      // elem3.style.backgroundPosition = z;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', throttle(100, parallax));

    return () => document.removeEventListener('mousemove', parallax);
  }, []);

  return (
    <>
      <BackgroundImage id="parallax1" />
      {/* <BackgroundImage id="parallax2" /> */}
      {/* <BackgroundImage id="parallax3" /> */}
    </>
  );
};

const Header = () => (
  // In the header, it contains a fullpage with all of the necessary background elements
  <HeaderComponent>
    <Page backgroundColor={SECONDARY_COLOR}>
      <Flex align="center" column>
        <Text
          small
          color={SUBTITLE_COLOR}
          style={{
            writingMode: 'vertical-rl',
            transform: 'scale(-1, -1)',
            position: 'absolute',
            top: '50vh',
            left: '20px',
          }}
        >
          {'Scroll to see more'}
        </Text>
        <div style={{
          width: '2px',
          height: '60px',
          backgroundColor: `${DARK_TITLE_COLOR}`,
          position: 'absolute',
          top: 'calc(50vh + 110px)',
          left: '25px',
        }}
        />
        <i
          className="fa fa-chevron-down"
          style={{
            color: `${DARK_TITLE_COLOR}`,
            position: 'absolute',
            top: 'calc(50vh + 160px)',
            left: '18px',
          }}
        />
      </Flex>
      <BallBackground />
      {/* <RibbonCanvas /> */}
      <Flex height="100vh" py="10%" justify="space-between" column style={{ zIndex: 1 }}>
        <Box pr="70vw">
          <AccentBar />
        </Box>
        <Box pl="35vw">
          <AccentBar reversed />
        </Box>
      </Flex>
    </Page>
  </HeaderComponent>
);

Header.displayName = 'Header';

export default Header;
