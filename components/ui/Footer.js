import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Box, Text } from '.';
import {
  DARK_TITLE_COLOR, easingFunction, EXTRA_DARK, PRIMARY_COLOR, SECONDARY_COLOR, SUBTITLE_COLOR, WHITE,
} from '../../utils/theme';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${WHITE};
`;

const Divider = styled.div`
  width: 85%;
  height: 1px;
  background-color: ${SUBTITLE_COLOR};
  opacity: 0.2;
`;

const LeafNavigationBox = styled(Box)`
  padding-left: 24px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -12px;
    left: 0;
    background-color: ${SUBTITLE_COLOR};
    opacity: 0.2;
    width: 2px;
    height: ${(props) => (props.reducedHeight ? '42px' : '60px')};
  }
`;

const NavigationText = styled(Text)`
  display: inline-block;
  color: ${DARK_TITLE_COLOR};
  letter-spacing: -1.5px;
  font-weight: 700;
  transition: color 0.5s ${easingFunction};

  &:hover {
    color: ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const ConnectIcon = styled(Box)`
  width: fit-content;
  background-color: ${SECONDARY_COLOR};
  padding: 12px 10px;
  border-radius: 50%;
  font-size: 2rem;
  color: ${DARK_TITLE_COLOR};
  transition: color 0.5s ${easingFunction};
  margin: 16px;

  &:hover {
    color: ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const UnderlineText = styled(Text)`
  text-decoration: none;
  transition: color 0.5s ${easingFunction};

  &:hover {
    cursor: pointer;
    color: ${PRIMARY_COLOR};
    // text-decoration: underline;
  }
`;

// TODO: Rework tree / directory component, see below:
// My work
//  |- Photography
//  |- Web Dev
//  |- Computer Graphics
const Footer = () => (
  <FooterContainer>
    <Flex width={1} pb={4} justify="space-between">
      {/* Navigation */}
      <Flex pl={6} pt={5} width={0.5} column>
        <Text uppercase color={PRIMARY_COLOR} letterSpacing={0.3}>
          Navigation
        </Text>
        <Flex mt={3} column>
          <Box mr={4} my={3}>
            <NavigationText medium>
              Home
            </NavigationText>
          </Box>
          <Box mr={4} my={3}>
            <NavigationText medium>
              My Work
            </NavigationText>
          </Box>
          <LeafNavigationBox mr={4} my={3}>
            <NavigationText medium>
              Photography
            </NavigationText>
          </LeafNavigationBox>
          <LeafNavigationBox mr={4} my={3}>
            <NavigationText medium>
              Web Development
            </NavigationText>
          </LeafNavigationBox>
          <LeafNavigationBox mr={4} my={3} reducedHeight>
            <NavigationText medium>
              Computer Graphics
            </NavigationText>
          </LeafNavigationBox>
          <Box mr={4} my={3}>
            <NavigationText medium>
              About
            </NavigationText>
          </Box>
          <Box mr={4} my={3}>
            <NavigationText medium>
              Contact Me
            </NavigationText>
          </Box>
        </Flex>
      </Flex>
      {/* Connect */}
      <Flex width={0.5} column>
        <Flex height="200px" background={EXTRA_DARK} mt="-1px" style={{ position: 'relative' }}>
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
        <Box pt={4} ml={4}>
          <Text uppercase color={PRIMARY_COLOR} letterSpacing={0.3}>
            Connect
          </Text>
        </Box>
        <Flex mt={4} ml={4} width={0.5} justify="center" style={{ flexWrap: 'wrap' }}>
          <Flex>
            <ConnectIcon>
              <i className="fa fa-twitter fa-fw" />
            </ConnectIcon>
            <ConnectIcon>
              <i className="fa fa-instagram fa-fw" />
            </ConnectIcon>
            <ConnectIcon>
              <i className="fa fa-github fa-fw" />
            </ConnectIcon>
          </Flex>
          <Flex>
            <ConnectIcon>
              <i className="fa fa-gitlab fa-fw" />
            </ConnectIcon>
            <ConnectIcon>
              <i className="fa fa-linkedin fa-fw" />
            </ConnectIcon>
            <ConnectIcon>
              <i className="fa fa-facebook fa-fw" />
            </ConnectIcon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex width={1} justify="center">
      <Divider />
    </Flex>
    <Flex px="10%" py="3%" justify="space-between" align="space-between">
      <Box>
        <a href="https://github.com/willywill/site" style={{ textDecoration: 'none' }}>
          <UnderlineText color={SUBTITLE_COLOR} letterSpacing={0.3}>
            Designed & Coded by Will Germany
          </UnderlineText>
        </a>
      </Box>
      <Box>
        <Text color={SUBTITLE_COLOR} letterSpacing={0.3}>
          Last Updated — {`${new Date().toLocaleString('default', { month: 'long' })}, ${(new Date().getFullYear())}`}
        </Text>
      </Box>
      <Box>
        <Link href="/privacy-policy">
          <UnderlineText color={SUBTITLE_COLOR} letterSpacing={0.3}>
            Privacy Policy
          </UnderlineText>
        </Link>
      </Box>
    </Flex>
  </FooterContainer>
);

export default Footer;