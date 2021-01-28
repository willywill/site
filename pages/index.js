import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/ui';
import Header from '../components/ui/Header';
import Navbar from '../components/ui/Navbar';
import FlyUpText from '../components/composite/FlyUpText';
import { PRIMARY_COLOR, WHITE } from '../utils/theme';
import Footer from '../components/ui/Footer';

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

const RoundedImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: url('/self.jpg');
  background-size: cover;
  background-position: center;
`;

const HomePage = () => (
  <>
    <Header />
    <Navbar />
    <Flex width={1} height="100vh" align="center" justify="center">
      <Flex width={1} px="15%" pb={1} style={{ overflow: 'hidden' }}>
        <FlyUpText center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
          {`I am Will Germany, a self-taught software engineer
  working on full-stack web development, real-time computer graphics and photography.`}
        </FlyUpText>
      </Flex>
    </Flex>
    <Flex width={1} justify="center" height="1500px" backgroundColor={WHITE}>
      <FlyUpText center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
        {'At A Glance.'}
      </FlyUpText>
      <RoundedImage />
      <Image />
    </Flex>
    <Flex backgroundColor={PRIMARY_COLOR} />
    <Footer />
  </>
);

export default HomePage;
