import React from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { PRIMARY_COLOR, easingFunction } from '../../utils/theme';
import Box from './styled/Box';
import Text from './styled/Text';

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

const NavbarItemWrapper = styled(Box)`
  overflow-x: hidden;
  cursor: pointer;

  animation: ${flyDown} 0.5s ${easingFunction};
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: transform;
`;

const AnimatedUnderline = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 8px;
  background-color: ${PRIMARY_COLOR};
  transform: translateX(-100px);
  transition: transform 0.5s ${easingFunction};

  ${NavbarItemWrapper}:hover & {
    transform: translateX(0px);
  }
`;

const HomeButton = () => (
  <Link href="/">
    <NavbarItemWrapper mr={4}>
      <Text color={PRIMARY_COLOR} bold weight={700} letterSpacing={-1} style={{ fontSize: '1.25em' }}>
        {'Home'}
      </Text>
      <AnimatedUnderline />
    </NavbarItemWrapper>
  </Link>
);

HomeButton.displayName = 'HomeButton';

export default HomeButton;
