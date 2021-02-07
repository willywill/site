import React, { useEffect } from 'react';
import { Flex } from '../../ui';
import MovingCubes from './MovingCubesRenderer';

const MovingCubesComponent = () => {
  useEffect(() => {
    const movingCubesRenderer = new MovingCubes();
    movingCubesRenderer.initialize();
  }, []);

  return (
    <Flex width={1} mr={6} mt={6} height="80px" id="cube-container" justify="flex-end" align="center" />
  );
};

MovingCubesComponent.displayName = 'MovingCubesComponent';

export default MovingCubesComponent;
