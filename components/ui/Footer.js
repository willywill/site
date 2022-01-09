import { string } from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Box, Text } from '.';
import { scrollIntoView } from '../../utils/animation';
import {
  breakpoints,
  DARK_TITLE_COLOR, easingFunction, EXTRA_DARK, mediaQuery,
  mediaQueryLessThan,
  PRIMARY_COLOR, SECONDARY_COLOR, SUBTITLE_COLOR, WHITE,
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

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 12px;

    &::after {
      top: -12px;
      left: 0;
      height: ${(props) => (props.reducedHeight ? '42px' : '48px')};
    }
  }
`;

const NavigationText = styled(Text)`
  display: inline-block;
  color: ${DARK_TITLE_COLOR};
  letter-spacing: -1.5px;
  font-weight: 700;
  transition: color 0.5s ${easingFunction};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
    letter-spacing: -1px;
  }

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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.15rem;
    padding: 10px 8px;
    margin: 8px;
  }
`;

const UnderlineText = styled(Text)`
  text-decoration: none;
  transition: color 0.5s ${easingFunction};

  &:hover {
    cursor: pointer;
    color: ${PRIMARY_COLOR};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.875em;
  }
`;

const PrivacyPolicy = () => {
  const [isToggled, setToggled] = useState(false);

  if (isToggled) {
    return (
      <Box onClick={() => setToggled(false)}>
        <UnderlineText color={SUBTITLE_COLOR} letterSpacing={0.3}>
          {'🚫 + 🍪 = No Privacy Policy'}
        </UnderlineText>
      </Box>
    );
  }

  return (
    <Box onClick={() => setToggled(true)}>
      <UnderlineText color={SUBTITLE_COLOR} letterSpacing={0.3}>
        {'Privacy Policy'}
      </UnderlineText>
    </Box>
  );
};

const ConnectLink = ({ href, icon }) => (
  <a href={href}>
    <ConnectIcon>
      <i className={`fa fa-${icon} fa-fw`} />
    </ConnectIcon>
  </a>
);

ConnectLink.propTypes = {
  href: string.isRequired,
  icon: string.isRequired,
};

// TODO: Refactor this component and move it out of the UI folder
const Footer = () => (
  <FooterContainer>
    <Flex width={1} pb={4} justify="space-between">
      {/* Navigation */}
      <Flex pl={mediaQuery(6, { mobileSmall: '20px', mobileLarge: '35px', tablet: '95px' })} pt={5} width={0.5} column>
        <Text uppercase color={PRIMARY_COLOR} letterSpacing={0.3}>
          {'Navigation'}
        </Text>
        <Flex mt={3} column>
          <Box mr={4} my={3} onClick={scrollIntoView('/home')}>
            <NavigationText medium>
              {'Home'}
            </NavigationText>
          </Box>
          <Box mr={4} my={3} onClick={scrollIntoView('/my-work', { block: 'start' })}>
            <NavigationText medium>
              {'My Work'}
            </NavigationText>
          </Box>
          <LeafNavigationBox mr={4} my={3} onClick={scrollIntoView('/computer-graphics', { block: 'start' })}>
            <NavigationText medium>
              {'Computer Graphics'}
            </NavigationText>
          </LeafNavigationBox>
          <LeafNavigationBox mr={4} my={3} onClick={scrollIntoView('/web-development', { block: 'start' })}>
            <NavigationText medium>
              {'Web Development'}
            </NavigationText>
          </LeafNavigationBox>
          <LeafNavigationBox mr={4} my={3} reducedHeight onClick={scrollIntoView('/photography', { block: 'start' })}>
            <NavigationText medium>
              {'Photography'}
            </NavigationText>
          </LeafNavigationBox>
          <Box mr={4} my={3} onClick={scrollIntoView('/about', { block: 'start' })}>
            <NavigationText medium>
              {'About'}
            </NavigationText>
          </Box>
          <Box mr={4} my={3} onClick={scrollIntoView('/contact', { block: 'start' })}>
            <NavigationText medium>
              {'Contact Me'}
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
            {'Connect'}
          </Text>
        </Box>
        <Flex mt={4} ml={4} width={0.5} justify="center" style={{ flexWrap: 'wrap' }}>
          <Flex>
            <ConnectLink href="https://twitter.com/WillGermany" icon="twitter" />
            <ConnectLink href="https://instagram.com/_ice.photography_" icon="instagram" />
            <ConnectLink href="https://github.com/willywill" icon="github" />
          </Flex>
          <Flex>
            <ConnectLink href="https://gitlab.com/willgermany1" icon="gitlab" />
            <ConnectLink href="https://linkedin.com/in/williamgermany" icon="linkedin" />
            {/* NOTE: Facebook disabled my account... As soon as I created it. Fuck em. */}
            {/* <ConnectLink href="https://facebook.com/.../" icon="facebook" /> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex width={1} justify="center">
      <Divider />
    </Flex>
    <Flex
      px="10%"
      py="3%"
      justify="space-between"
      align="space-between"
      flexDirection={mediaQueryLessThan('row', 'mobileLarge', 'column')}
    >
      <Box my={mediaQueryLessThan('0px', 'mobileLarge', '8px')}>
        <a href="https://github.com/willywill/site" style={{ textDecoration: 'none' }}>
          <UnderlineText color={SUBTITLE_COLOR} letterSpacing={0.3}>
            {'Designed & Coded by Will Germany'}
          </UnderlineText>
        </a>
      </Box>
      <Box my={mediaQueryLessThan('0px', 'mobileLarge', '8px')}>
        <Text color={SUBTITLE_COLOR} letterSpacing={0.3}>
          {'Last Updated — '}<time dateTime="2022-01">{'Jan, 2022'}</time>
        </Text>
      </Box>
      <Box my={mediaQueryLessThan('0px', 'mobileLarge', '8px')}>
        <PrivacyPolicy />
      </Box>
    </Flex>
  </FooterContainer>
);

export default Footer;
