import React, { useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../utils/theme';
import { Flex } from '../../ui';
import MovingCubes from './MovingCubesRenderer';

const MovingCubesWrapper = styled(Flex)`
  @media (max-width: ${breakpoints.desktopSmall}) {
    display: none;
  }
`;

const MovingCubesComponent = () => {
  useEffect(() => {
    const movingCubesRenderer = new MovingCubes();
    movingCubesRenderer.initialize();
  }, []);

  return (
    <MovingCubesWrapper
      width={1}
      mr={6}
      mt={5}
      height="256px"
      id="cube-container"
      justify="flex-end"
      align="center"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: '-100px',
        left: '5%',
        opacity: 0.915,
      }}
    />
  );
};

MovingCubesComponent.displayName = 'MovingCubesComponent';

export default MovingCubesComponent;
