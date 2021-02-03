import React, { useEffect } from 'react';
import { Flex } from '../../ui';
import MovingCubes from './MovingCubesRenderer';

const MovingCubesComponent = () => {
  useEffect(() => {
    const movingCubesRenderer = new MovingCubes();
    movingCubesRenderer.initialize();
  }, []);

  return (
    <Flex width={1} id="cube-container" justify="center" align="center" />
  );
};

MovingCubesComponent.displayName = 'MovingCubesComponent';

export default MovingCubesComponent;
