/* eslint-disable no-unreachable */
/* global document */
import React, { useState, useEffect } from 'react';
import debounce from 'lodash/fp/debounce';
import styled from 'styled-components';
import { number } from 'prop-types';
import { PRIMARY_COLOR, PRIMARY_COLOR_TRANSLUCENT, SUBTITLE_COLOR } from '../../../utils/theme';
import { Flex, Text } from '../../ui';
import { scrollIntoView } from '../../../utils/animation';

const SidewaysText = styled(Text)`
  writing-mode: vertical-rl;
  transform: scale(-1, -1);
  position: fixed;
  top: 50vh;
  left: 50px;
  color: ${SUBTITLE_COLOR};
  cursor: pointer;
`;

const SCROLL_INDICATOR_HEIGHT = 50;

const ScrollIndicatorProgress = styled.div`
  position: fixed;
  width: 3px;
  height: ${(props) => `${SCROLL_INDICATOR_HEIGHT}` * (props.progress * 0.01)}px;
  background-color: ${PRIMARY_COLOR};
  top: calc(50vh + 100px);
  left: 55px; 
  transform: scale(-1);

  &::before {
    content: "";
    position: fixed;
    bottom: 0;
    left: 0; 
    width: 3px;
    height: ${SCROLL_INDICATOR_HEIGHT}px;
    background-color: ${PRIMARY_COLOR_TRANSLUCENT};
  }
`;

const ScrollIndicatorContainer = () => {
  // TODO: Actually set this up properly and use it later
  return null;

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = document.body.scrollTop || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollAmount / totalHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    document.addEventListener('scroll', debounce(25, handleScroll), false);

    return () => document.removeEventListener('scroll', handleScroll, false);
  });

  return <ScrollIndicator scrollProgress={scrollProgress} />;
};

const ScrollIndicator = ({ scrollProgress }) => (
  <Flex column style={{ zIndex: 5 }} onClick={scrollIntoView('/home', { block: 'start' })}>
    <SidewaysText>
      {'Scroll to top'}
    </SidewaysText>
    <ScrollIndicatorProgress progress={scrollProgress} />
  </Flex>
);

ScrollIndicator.displayName = 'ScrollIndicator';

ScrollIndicator.propTypes = {
  scrollProgress: number.isRequired,
};

export default ScrollIndicatorContainer;
