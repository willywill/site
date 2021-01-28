import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Box, Text } from '.';
import {
  DARK_TITLE_COLOR, easingFunction, PRIMARY_COLOR, SECONDARY_COLOR, SUBTITLE_COLOR, WHITE,
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
    text-decoration: underline;
  }
`;

// TODO: Rework tree / directory component, see below:
// My work
//  |- Photography
//  |- Web Dev
//  |- Computer Graphics
const Footer = () => (
  <FooterContainer>
    <Flex width={1} px={4} py={4} justify="space-around">
      {/* Navigation */}
      <Flex pl={4} width={0.5} column>
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
      {/* Resources */}
      <Flex width={0.5} column>
        <Text uppercase color={PRIMARY_COLOR} letterSpacing={0.3}>
          Connect
        </Text>
        <Flex mt={4} width={0.5} justify="center" style={{ flexWrap: 'wrap' }}>
          <ConnectIcon>
            <i className="fa fa-twitter fa-fw" />
          </ConnectIcon>
          <ConnectIcon>
            <i className="fa fa-instagram fa-fw" />
          </ConnectIcon>
          <ConnectIcon>
            <i className="fa fa-github fa-fw" />
          </ConnectIcon>
          <ConnectIcon>
            <i className="fa fa-gitlab fa-fw" />
          </ConnectIcon>
          <ConnectIcon>
            <i className="fa fa-linkedin fa-fw" />
          </ConnectIcon>
        </Flex>
      </Flex>
    </Flex>
    <Flex width={1} justify="center">
      <Divider />
    </Flex>
    <Flex px="10%" py="3%" justify="space-between" align="space-between">
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
