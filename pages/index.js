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
  PRIMARY_COLOR_TRANSLUCENT, PRIMARY_FONT, PRIMARY_HOVER_COLOR, SUBTITLE_COLOR,
  WHITE, SECONDARY_COLOR, EXTRA_DARK, shiftHSL,
} from '../utils/theme';
import Footer from '../components/ui/Footer';
import AccentBar from '../components/composite/AccentBar';

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
`;

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

const Button = styled.button`
  /* background-color: ${PRIMARY_COLOR}; */
  background-color: transparent;
  border: none;
  outline: none;
  color: ${WHITE};
  font-size: 1.2rem;
  font-family: ${PRIMARY_FONT};
  font-weight: 300;
  border: 1px solid white;
  padding: 12px 25px;
  position: relative;
  cursor: pointer;
  /* text-transform: uppercase; */
  transition: background-color 0.4s ${easingFunction};
  /* box-shadow: 8px 8px ${PRIMARY_COLOR_TRANSLUCENT}; */

  &:hover {
    background-color: ${PRIMARY_HOVER_COLOR};
  }
`;

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
  /* transition: opacity 0.5s ${easingFunction}; */
  animation: ${fadeIn} 1s ${easingFunction};
  animation-fill-mode: forwards;
`;

const HomePage = () => (
  <>
    <Header />
    <Navbar />
    <Flex width={1}>
      <Box width={0.6}>
        <Flex width={1} height="calc(100vh - 62px)" align="center" justify="center" column>
          {/* <Flex mb={4} mt={-4} align="center" justify="flex-start">
            <Box mr={2}>
              <AccentBar />
            </Box>
            <Text medium bold letterSpacing={-2.16} color={DARK_TITLE_COLOR}>
              {'Will Germany'}
            </Text>
          </Flex> */}
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
        <FlyUpText center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
          {'At A Glance.'}
        </FlyUpText>
      </Flex>
      <Flex width={1} mt={4} justify="center">
        <Flex>
          <Box width="25vw" height={500} p={4} background={shiftHSL({}, PRIMARY_COLOR)}>
            <Text medium bold color={WHITE} letterSpacing={-1.56}>
              {'Hello'}
            </Text>
          </Box>
          <Box width="25vw" height={500} p={4} background={shiftHSL({ lightness: 20 }, PRIMARY_COLOR)}>
            <Text medium bold color={WHITE} letterSpacing={-1.56}>
              {'Hello'}
            </Text>
          </Box>
          <Box width="25vw" height={500} p={4} background={shiftHSL({ lightness: 40 }, PRIMARY_COLOR)}>
            <Text medium bold color={DARK_TITLE_COLOR} letterSpacing={-1.56}>
              {'Hello'}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex mt={5} width={1} justify="center">
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
      <Flex width={1} my={4} px={7} justify="center" column>
        <Flex justify="center">
          <Logo width="150px" src="/c-sharp.png" alt="C# logo" />
          <Logo width="150px" src="/unity.png" alt="Unity logo" />
          <Logo width="150px" src="/js.png" alt="Javascript logo" />
          <Logo width="150px" src="/graphql.png" alt="GraphQL logo" />
          <Logo width="150px" src="/react.png" alt="ReactJS logo" />
        </Flex>
        <Flex justify="center">
          <Logo width="150px" src="/opengl.png" alt="OpenGL logo" />
          <Logo width="150px" src="/directx.png" alt="DirectX logo" />
          <Logo width="150px" src="/shopify.png" alt="Shopify logo" />
          <Logo width="150px" src="/vue.png" alt="VueJS logo" />
          <Logo width="150px" src="/node.png" alt="NodeJS logo" />
        </Flex>
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
        <Flex width={1} pl={5} mt={5} column>
          <FlyUpText extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
            {'Hello'}
          </FlyUpText>
          <Box style={{ overflow: 'hidden' }} mt={4}>
            <FlyUpText delayMultiplier={2} large color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
              {'Let\'s touch base.'}
            </FlyUpText>
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
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex column background={EXTRA_DARK} py="250px" align="center">
      <Box pr="25%">
        <AccentBar color={WHITE} />
      </Box>
      <Box mt={6}>
        <FlyUpText center fontSize="5rem" color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
          {'Openings'}
        </FlyUpText>
      </Box>
      <Box style={{ overflow: 'hidden' }} mt={4}>
        <FlyUpText delayMultiplier={2} fontSize="3rem" color={WHITE} weight={700} letterSpacing={-2.56}>
          {'I\'m available for work.'}
        </FlyUpText>
      </Box>
      <Box width={1} maxWidth="1280px" mt={4} px={7}>
        <FlyUpText delayMultiplier={3} center fontSize="1.1rem" color={WHITE} letterSpacing={-0.3} thin>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt adipisci cupiditate corrupti impedit quos nemo asperiores magnam <strong style={{ fontWeight: 'bolder' }}>tempora ab consequatur</strong> ipsam saepe repellat nisi, reiciendis quidem quia molestias doloremque dolorum soluta eos molestiae corporis! Laboriosam totam consectetur quos modi eius?
        </FlyUpText>
        <br />
        <FlyUpText delayMultiplier={4} center fontSize="1.1rem" color={WHITE} letterSpacing={-0.3} thin>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong style={{ fontWeight: 'bolder' }}>Necessitatibus</strong> ex sint quia quasi, vitae consequatur dicta. Adipisci omnis molestias vero, praesentium natus autem ex voluptatibus accusamus animi itaque beatae pariatur distinctio mollitia qui vitae ut.
        </FlyUpText>
      </Box>
      <Box mt={5} mb={6}>
        <Button>
          Get in touch
        </Button>
      </Box>
      <Box pl="25%">
        <AccentBar reversed color={WHITE} />
      </Box>
    </Flex>
    <Footer />
  </>
);

export default HomePage;
