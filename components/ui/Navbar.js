import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex } from '.';
import {
  breakpoints, easingFunction, mediaQueryLessThan, PRIMARY_COLOR, PRIMARY_HOVER_COLOR, WHITE,
} from '../../utils/theme';
import NavbarItem from './NavbarItem';
import Box from './styled/Box';

const NAVBAR_HEIGHT = '62';

const ContactMeButtonWrapper = styled(Flex)`
  width: 35px;
  height: 35px;
  background-color: ${PRIMARY_COLOR};
  border-radius: 50%;
  color: ${WHITE};
  font-size: 1rem;
  transition: background-color 0.5s ${easingFunction};
  cursor: pointer;

  &:hover {
    background-color: ${PRIMARY_HOVER_COLOR};
  }
`;

const flyDown = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const FlyDownContainer = styled.div`
  display: inherit;
  animation: ${flyDown} 0.5s ${easingFunction};
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: transform;
`;

const Nav = styled.nav`
  height: ${NAVBAR_HEIGHT}px;
  padding-right: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 0px;
  }
`;

const LogoWrapper = styled(Flex)`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const ContactMeButton = () => (
  <a href="mailto:me@williamgermany.com">
    <ContactMeButtonWrapper justify="center" align="center">
      <i className="fa fa-envelope" style={{ marginBottom: '1px' }} />
    </ContactMeButtonWrapper>
  </a>
);

// TODO: Move this component out of the UI folder & NavbarItem
const Navbar = () => (
  <Nav>
    <Flex
      width={1}
      justify="space-between"
      align="center"
      style={{ overflow: 'hidden' }}
      flexDirection={mediaQueryLessThan('row', 'mobileLarge', 'column')}
    >
      <LogoWrapper justify="flex-start" align="center">
        <Box mt="24px" ml={mediaQueryLessThan(5, 'mobileLarge', '0px')}>
          <img height="30px" src="/favicon.png" alt="Logo" />
        </Box>
      </LogoWrapper>
      <Flex justify="flex-end" align="center">
        <FlyDownContainer>
          <Flex width={1} mt={4} justify="flex-end">
            <NavbarItem link="/" label="Home" />
            <NavbarItem link="/my-work" label="Work" />
            <NavbarItem link="/about" label="About" />
            <NavbarItem link="/contact" label="Contact" />
          </Flex>
          <Box mt="24px" mr={mediaQueryLessThan(5, 'mobileLarge', '0px')}>
            <ContactMeButton />
          </Box>
        </FlyDownContainer>
      </Flex>
    </Flex>
  </Nav>
);

Navbar.displayName = 'Navbar';

export default Navbar;
