import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex } from '.';
import { easingFunction, PRIMARY_COLOR, PRIMARY_HOVER_COLOR, WHITE } from '../../utils/theme';
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
  animation: ${flyDown} 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: transform;
`;

const Nav = styled.nav`
  height: ${NAVBAR_HEIGHT}px;
  padding-right: 32px;
`;

const ContactMeButton = () => (
  <ContactMeButtonWrapper justify="center" align="center">
    <i className="fa fa-envelope" style={{ marginBottom: '1px' }} />
  </ContactMeButtonWrapper>
);

// TODO: Move this component out of the UI folder & NavbarItem
const Navbar = () => (
  <Nav>
    <Flex width={1} justify="space-between" align="center" style={{ overflowY: 'none' }}>
      <Flex justify="flex-start" align="center">
        <Box mt="24px" ml={5}>
          <img height="30px" src="/favicon.png" alt="Logo" />
        </Box>
      </Flex>
      <Flex justify="flex-end" align="center">
        <FlyDownContainer>
          <Flex width={1} mt={4} justify="flex-end">
            <NavbarItem link="/" label="Home" />
            <NavbarItem link="/my-work" label="My Work" />
            <NavbarItem link="/about" label="About" />
            <NavbarItem link="/contact" label="Contact" />
          </Flex>
          <Box mt="24px" mr={4}>
            <ContactMeButton />
          </Box>
        </FlyDownContainer>
      </Flex>
    </Flex>
  </Nav>
);

Navbar.displayName = 'Navbar';

export default Navbar;
