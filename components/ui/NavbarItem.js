/* global document */
import React from 'react';
import { string } from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { easingFunction, PRIMARY_COLOR, SUBTITLE_COLOR } from '../../utils/theme';
import Box from './styled/Box';
import Text from './styled/Text';

const NavbarItemWrapper = styled(Box)`
  overflow-x: hidden;
  cursor: pointer;
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100px);
    background-color: ${SUBTITLE_COLOR};
  }

  to {
    transform: translateX(0px);
    background-color: ${PRIMARY_COLOR};
  }
`;

const AnimatedUnderline = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 8px;
  background-color: ${PRIMARY_COLOR};
  transform: translateX(-100px);
  transition: transform 0.5s ${easingFunction};
  animation: ${(props) => (props.isCurrentLink ? css`${slideRight} 0.5s 0.5s ${easingFunction}` : '')};
  animation-fill-mode: forwards;

  ${NavbarItemWrapper}:hover & {
    transform: translateX(0px);
  }
`;

const NavbarItem = ({ link, label }) => {
  const isCurrentLink = link === '/';

  const handleClick = () => {
    const sectionElement = document.getElementById(link);
    sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <NavbarItemWrapper mr={4} isCurrentLink={isCurrentLink} onClick={handleClick}>
      <Text color={PRIMARY_COLOR} bold weight={700} letterSpacing={-1} style={{ fontSize: '1.25em' }}>
        {label}
      </Text>
      <AnimatedUnderline isCurrentLink={isCurrentLink} />
    </NavbarItemWrapper>
  );
};

NavbarItem.displayName = 'NavbarItem';

NavbarItem.propTypes = {
  label: string.isRequired,
  link: string.isRequired,
};

export default NavbarItem;
