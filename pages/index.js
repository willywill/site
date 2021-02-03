/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useCountUp } from 'react-countup';
import { Box, Flex, Text } from '../components/ui';
import Header from '../components/ui/Header';
import Navbar from '../components/ui/Navbar';
import FlyUpText from '../components/composite/FlyUpText';
import {
  DARK_TITLE_COLOR, easingFunction, PRIMARY_COLOR,
  SUBTITLE_COLOR, WHITE, SECONDARY_COLOR, EXTRA_DARK,
} from '../utils/theme';
import Footer from '../components/ui/Footer';
import AccentBar from '../components/composite/AccentBar';
import RibbonCanvas from '../components/composite/RibbonCanvas';
import MovingCubesComponent from '../components/composite/MovingCubes';

const fadeInFull = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1.0;
  }
`;

const fadeInHalf = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
`;

const fadeInQuarter = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.25;
  }
`;

const Image = styled.div`
  margin-top: 500px;
  width: 400px;
  height: 600px;
  background-color: ${PRIMARY_COLOR};
  opacity: 0.75;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 600px;
    top: 50px;
    left: 50px;
    background-color: ${PRIMARY_COLOR};
    opacity: 0.4;
  }
`;

const FlexShadow = styled(Flex)`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 30px;
    left: 30px;
    background-color: ${PRIMARY_COLOR};
    opacity: 0.5;
    animation: ${fadeInHalf} 2s ${easingFunction}; 
    animation-fill-mode: forwards;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 55px;
    left: 55px;
    background-color: ${PRIMARY_COLOR};
    opacity: 0.25;
    animation: ${fadeInQuarter} 2s ${easingFunction}; 
    animation-fill-mode: forwards;
    z-index: -1;
  }
`;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }

//   to {
//     opacity: 0.8;
//   }
// `;

// const RoundedImage = styled.div`
//   width: 240px;
//   height: 240px;
//   border-radius: 50%;
//   background-image: url('/self.jpg');
//   background-size: cover;
//   background-position: center;
//   opacity: 0;
//   animation: ${fadeIn} 0.4s 0.5s ${easingFunction};
//   animation-fill-mode: forwards;
// `;

// const Button = styled.button`
//   /* background-color: ${PRIMARY_COLOR}; */
//   background-color: transparent;
//   border: none;
//   outline: none;
//   color: ${WHITE};
//   font-size: 1.2rem;
//   font-family: ${PRIMARY_FONT};
//   font-weight: 300;
//   border: 1px solid white;
//   padding: 12px 25px;
//   position: relative;
//   cursor: pointer;
//   /* text-transform: uppercase; */
//   transition: background-color 0.4s ${easingFunction};
//   /* box-shadow: 8px 8px ${PRIMARY_COLOR_TRANSLUCENT}; */
// `;

const TextWithHover = styled(Text)`
  cursor: pointer;
`;

const IconFadeIn = styled.i`
  color: ${PRIMARY_COLOR};
  opacity: ${(props) => (props.isHover ? 1 : 0)};
  transform: ${(props) => (props.isHover ? 'translateX(0px)' : 'translateX(-50px)')};
  transition: opacity 0.4s ${easingFunction}, transform 0.15s ${easingFunction};
`;

const TextWithHoverArrow = ({ text }) => {
  const [isHover, setHover] = useState(false);

  return (
    <Flex style={{ position: 'relative' }}>
      <Box style={{ overflow: 'hidden', position: 'absolute', left: -20 }}>
        <IconFadeIn className="fa fa-chevron-right" isHover={isHover} />
      </Box>
      <TextWithHover
        left
        bold
        color={SUBTITLE_COLOR}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {text}
      </TextWithHover>
    </Flex>
  );
};

const CountUpNumber = ({ end }) => {
  const { countUp } = useCountUp({ end, useEasing: true, duration: 5 });
  return (
    <FlyUpText extraLarge bold color={PRIMARY_COLOR}>
      {countUp}
    </FlyUpText>
  );
};

const Logo = styled.img`
  margin: 25px;
  opacity: 0.6;
  filter: none;
  cursor: pointer;
  /* transition: filter 0.5s ${easingFunction}; Crazy color effect */

  &:hover {
    opacity: 1.0;
    filter: invert(35%) sepia(81%) saturate(1846%) hue-rotate(202deg) brightness(105%) contrast(101%);
  }
`;

const ExampleBox = styled(Box)`
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: filter 0.5s ${easingFunction};
  filter: saturate(0.2);
  cursor: pointer;
  animation: ${fadeInFull} 1s ${easingFunction};
  
  &:hover {
    filter: saturate(0.85);
  }
`;

const ButtonBorder = styled.svg`
  display: block;
  position: absolute;
  top: -30px;
  left: -47px;
  cursor: pointer;
  margin: auto;
  stroke-dasharray: 150 200 140 140;
  transition: stroke-dasharray 1.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    stroke-dasharray: 1000 600 600 600;
    transition: stroke-dasharray 1.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
`;

const HomePage = () => (
  <>
    <Header />
    <Navbar />
    <Flex width={1}>
      <Box width={0.6}>
        <Flex width={1} height="calc(100vh - 62px)" align="center" justify="center" column>
          <Flex width={1} px="15%" pb={1} style={{ overflow: 'hidden' }}>
            <FlyUpText center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
              {'Building digital products, immersive visuals, and capturing moments.'}
            </FlyUpText>
          </Flex>
          <Box maxWidth={600} mt={4}>
            <FlyUpText center delayMultiplier={2} fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
              {`I'm a self-taught software engineer
working on full-stack web development, real-time computer graphics and photography.`}
            </FlyUpText>
          </Box>
        </Flex>
      </Box>
      <Box width={0.4} />
    </Flex>
    <Flex mt={5} backgroundColor={WHITE} column>
      <Flex ml={7}>
        <Text small color={DARK_TITLE_COLOR}>
          1 / 5
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
        <FlexShadow>
          <ExampleBox width="25vw" height={700} p={4} url="/minecraft.png">
            <Text medium bold color={WHITE} letterSpacing={-1.56}>
              {'Computer Graphics'}
            </Text>
            <Box mt={3}>
              <Text large bold color={WHITE} letterSpacing={-1.56}>
                {'Photorealistic Visuals'}
              </Text>
            </Box>
          </ExampleBox>
          <ExampleBox width="25vw" height={700} p={4} url="/code.png">
            <Text medium bold color={WHITE} letterSpacing={-1.56}>
              {'Web Development'}
            </Text>
            <Box mt={3}>
              <Text large bold color={WHITE} letterSpacing={-1.56}>
                {'Engaging Products'}
              </Text>
            </Box>
          </ExampleBox>
          <ExampleBox width="25vw" height={700} p={4} url="/photography.png">
            <Text medium bold color={WHITE} letterSpacing={-1.56}>
              {'Photography'}
            </Text>
            <Box mt={3}>
              <Text large bold color={WHITE} letterSpacing={-1.56}>
                {'Surreal Memories'}
              </Text>
            </Box>
          </ExampleBox>
        </FlexShadow>
      </Flex>
      <Flex data-aos="fly-in" mt={5} width={1} justify="center">
        <Flex mr={5} column>
          <CountUpNumber end="218" />
          <FlyUpText color={SUBTITLE_COLOR}>
            Shaders Written
          </FlyUpText>
        </Flex>
        <Flex mr={5} column>
          <CountUpNumber end="12853" />
          <FlyUpText color={SUBTITLE_COLOR}>
            Code Commits
          </FlyUpText>
        </Flex>
        <Flex mr={5} column>
          <CountUpNumber end="5011" />
          <FlyUpText color={SUBTITLE_COLOR}>
            Photos Taken
          </FlyUpText>
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
      <Flex column py={6} background={SECONDARY_COLOR} style={{ overflow: 'hidden', position: 'relative' }}>
        <RibbonCanvas />
        <Flex pr={7} width={1} justify="flex-end">
          <Text small color={DARK_TITLE_COLOR}>
            1.5 / 5
          </Text>
          <Flex column>
            <Text data-aos="fly-in" extraLarge bold color={PRIMARY_COLOR} letterSpacing={-2.56}>
              Skills.
            </Text>
            <div
              data-aos="slide-left"
              style={{
                opacity: 0.7, height: '5px', width: '100%', backgroundColor: SUBTITLE_COLOR, marginTop: '10px', transform: 'translateX(-20px)',
              }}
            />
          </Flex>
        </Flex>
        <Flex width={1} my={4} px={7} justify="center" column>
          <Flex justify="center" style={{ overflow: 'hidden' }}>
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/c-sharp.png" alt="C# logo" />
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/unity.png" alt="Unity logo" />
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/js.png" alt="Javascript logo" />
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/graphql.png" alt="GraphQL logo" />
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/react.png" alt="ReactJS logo" />
          </Flex>
          <Flex justify="center" style={{ overflow: 'hidden' }}>
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/opengl.png" alt="OpenGL logo" />
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/directx.png" alt="DirectX logo" />
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/shopify.png" alt="Shopify logo" />
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/vue.png" alt="VueJS logo" />
            <Logo data-aos="fly-in-far" data-aos-delay="800" width="150px" src="/logos/node.png" alt="NodeJS logo" />
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Flex width={0.5} background={WHITE} />
        <Flex width={0.5} background={SECONDARY_COLOR} style={{ position: 'relative' }}>
          <Flex height="200px" mt="-1px">
            <div style={{
              width: '100px',
              height: '4px',
              backgroundColor: PRIMARY_COLOR,
              position: 'absolute',
              left: '-50px',
              top: '100px',
            }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex column>
        <Flex pl={7} width={1} mt={6} justify="flex-start">
          <Text small color={DARK_TITLE_COLOR}>
            2 / 5
          </Text>
          <Flex column>
            <Text data-aos="fly-in" extraLarge bold color={PRIMARY_COLOR} letterSpacing={-2.56}>
              Computer Graphics.
            </Text>
            <div
              data-aos="slide-left"
              style={{
                opacity: 0.7, height: '5px', width: '100%', backgroundColor: SUBTITLE_COLOR, marginTop: '10px', transform: 'translateX(20px)',
              }}
            />
          </Flex>
        </Flex>
        <Box my={1}>
          <MovingCubesComponent />
        </Box>
      </Flex>
      <Flex>
        <Box width={0.5}>
          <Text data-aos="fly-in" large bold color={DARK_TITLE_COLOR} letterSpacing={-2.56}>
            Ocean Rendering
            <img width="100%" height="600px" src="/ocean.png" alt="Ocean Rendering" />
          </Text>
        </Box>
        <Box width={0.5}>
          <Text data-aos="fly-in" large bold color={DARK_TITLE_COLOR} letterSpacing={-2.56}>
            Camera Simulation
            <img width="100%" height="600px" src="/camera.png" alt="Ocean Rendering" />
          </Text>
        </Box>
      </Flex>
      <Flex width={1} justify="center" style={{ position: 'relative' }}>
        <video width="1920px" loop autoPlay muted style={{ outline: 'none', position: 'relative' }}>
          <source src="/videos/pbr-sky.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
        <Box mt={5} ml={5} style={{ zIndex: 3, position: 'absolute', left: 0 }}>
          <Text data-aos="fly-in" extraLarge bold color={WHITE} letterSpacing={-2.56}>
            Physically-based Sky
          </Text>
          <div
            data-aos="slide-left"
            style={{
              opacity: 0.7, height: '5px', width: '100%', backgroundColor: PRIMARY_COLOR, marginTop: '10px', transform: 'translateX(20px)',
            }}
          />
        </Box>
      </Flex>
      <Box mb={7} ml={7}>
        <Image />
      </Box>
    </Flex>
    <Flex background={SECONDARY_COLOR} pb="600px" />
    <Flex width={1} background={WHITE}>
      <Box width={0.5}>
        <a href="https://www.google.com/maps/place/Cincinnati,+OH/">
          <img width="100%" height="100%" src="/cincinnati.png" alt="Map" />
        </a>
      </Box>
      <Flex width={0.5} column>
        <Box width={1} mb={5} background={SECONDARY_COLOR} height="25%" />
        <Flex width={1} pl={5} mt={6} column>
          <Text data-aos="fly-in" extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
            {'Hello'}
          </Text>
          <Box style={{ overflow: 'hidden' }} mt={4}>
            <Text data-aos="fly-in" data-aos-delay="800" large color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
              {'Let\'s touch base.'}
            </Text>
          </Box>
          <Flex mt={48} column>
            <Box>
              <Text thin uppercase color={SUBTITLE_COLOR}>
                {'Will Germany'}
              </Text>
            </Box>
            <Box mt={4}>
              <a href="https://www.google.com/maps/place/Cincinnati,+OH/" style={{ textDecoration: 'none' }}>
                <TextWithHoverArrow text="Cincinnati, Ohio" />
              </a>
            </Box>
            <Box mt={3}>
              <a href="mailto:me@williamgermany.com" style={{ textDecoration: 'none' }}>
                <TextWithHoverArrow text="me@williamgermany.com" />
              </a>
            </Box>
            <Box mt={3}>
              <a href="https://linkedin.com/in/williamgermany" style={{ textDecoration: 'none' }}>
                <TextWithHoverArrow text="https://linkedin.com/in/williamgermany" />
              </a>
            </Box>
            <Flex mt={4}>
              <Text color={SUBTITLE_COLOR} thin>
                See more details below
              </Text>
              <Box ml={2} style={{ color: DARK_TITLE_COLOR }}>
                <i className="fa fa-angle-down" />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex column background={EXTRA_DARK} py="250px" align="center">
      <Box pr="25%">
        <AccentBar color={WHITE} />
      </Box>
      <Box mt={6}>
        <Text data-aos="fly-in" center fontSize="5rem" color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
          {'Openings'}
        </Text>
      </Box>
      <Box style={{ overflow: 'hidden' }} mt={4}>
        <Text data-aos="fly-in" data-aos-delay="800" fontSize="3rem" color={WHITE} weight={700} letterSpacing={-2.56}>
          {'I\'m available for work.'}
        </Text>
      </Box>
      <Box width={1} maxWidth="1280px" mt={4} px={7}>
        <Text data-aos="fly-in" data-aos-delay="1200" center fontSize="1.1rem" color={WHITE} letterSpacing={-0.3} thin>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt adipisci cupiditate corrupti impedit quos nemo asperiores magnam <strong style={{ fontWeight: 'bolder' }}>tempora ab consequatur</strong> ipsam saepe repellat nisi, reiciendis quidem quia molestias doloremque dolorum soluta eos molestiae corporis! Laboriosam totam consectetur quos modi eius?
        </Text>
        <br />
        <Text data-aos="fly-in" data-aos-delay="1600" center fontSize="1.1rem" color={WHITE} letterSpacing={-0.3} thin>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong style={{ fontWeight: 'bolder' }}>Necessitatibus</strong> ex sint quia quasi, vitae consequatur dicta. Adipisci omnis molestias vero, praesentium natus autem ex voluptatibus accusamus animi itaque beatae pariatur distinctio mollitia qui vitae ut.
        </Text>
      </Box>
      <Box mt={5} mb={6}>
        <Flex style={{ position: 'relative' }}>
          <ButtonBorder width="200" height="70">
            <rect width="200" height="70" style={{ fill: 'rgba(0, 0, 0, 0)', strokeWidth: 2, stroke: 'rgb(255, 255, 255)' }} />
          </ButtonBorder>
          <Text color={WHITE} thin uppercase>
            Get in touch
          </Text>
        </Flex>
      </Box>
      <Box pl="25%">
        <AccentBar reversed color={WHITE} />
      </Box>
    </Flex>
    <Footer />
  </>
);

export default HomePage;
