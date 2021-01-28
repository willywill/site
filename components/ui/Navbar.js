import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex } from '.';
import { PRIMARY_COLOR, PRIMARY_HOVER_COLOR, WHITE } from '../../utils/theme';
import NavbarItem from './NavbarItem';
import Box from './styled/Box';

const ContactMeButtonWrapper = styled(Flex)`
  width: 35px;
  height: 35px;
  background-color: ${PRIMARY_COLOR};
  border-radius: 50%;
  color: ${WHITE};
  font-size: 1rem;
  transition: background-color 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
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
  padding-right: 32px;
`;

const ContactMeButton = () => (
  <ContactMeButtonWrapper justify="center" align="center">
    <i className="fa fa-envelope" style={{ marginBottom: '1px' }} />
  </ContactMeButtonWrapper>
);

const Navbar = () => (
  <Nav>
    <Flex width={1} justify="flex-end" align="center" style={{ overflowY: 'none' }}>
      <FlyDownContainer>
        <Flex width={1} mt={4} justify="flex-end">
          <NavbarItem link="/" label="Home" />
          <NavbarItem link="/projects" label="My Work" />
          <NavbarItem link="/about" label="About" />
          <NavbarItem link="/contact" label="Contact" />
        </Flex>
        <Box mt="24px" mr={4}>
          <ContactMeButton />
        </Box>
      </FlyDownContainer>
    </Flex>
  </Nav>
);

Navbar.displayName = 'Navbar';

Navbar.propTypes = {

};

Navbar.defaultProps = {

};

export default Navbar;
