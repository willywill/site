/* global document */
import React, { useState, useEffect } from 'react';
import debounce from 'lodash/fp/debounce';
import styled from 'styled-components';
import {
  breakpoints,
  easingFunction, PRIMARY_COLOR, PRIMARY_COLOR_TRANSLUCENT,
  SUBTITLE_COLOR, WHITE,
} from '../../../utils/theme';
import { Flex, Text } from '../../ui';
import { scrollIntoView } from '../../../utils/animation';

// Height in pixels of the scroll progress bar
const SCROLL_INDICATOR_HEIGHT = 50;
// At what percentage of scroll on the Y direction do we begin to show the scroll indicator?
const SCROLL_INDICATOR_VISIBILITY_THRESHOLD = 7;

const SidewaysText = styled(Text)`
  writing-mode: vertical-rl;
  transform: scale(-1, -1);
  position: fixed;
  top: 50vh;
  left: 50px;
  color: ${(props) => props.color || SUBTITLE_COLOR};
  transition: color 0.5s ${easingFunction};
  z-index: 3;
`;

const ScrollIndicatorProgress = styled.div`
  position: fixed;
  width: 3px;
  background-color: ${PRIMARY_COLOR};
  top: calc(50vh + 100px);
  left: 55px; 
  transform: scale(-1);
  z-index: 3;

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

const ScrollIndicatorWrapper = styled(Flex)`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const getScrollColor = (scrollPercentage) => {
  if (scrollPercentage >= 91 && scrollPercentage <= 99) {
    return WHITE;
  }

  return SUBTITLE_COLOR;
};

// NOTE: This works in a production setting only
// Causing flickering on `background-image: url` components in development environment
// TODO: File an issue with Next.js?
const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = document.body.scrollTop || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollAmount / totalHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    document.addEventListener('scroll', debounce(15, handleScroll), false);

    return () => document.removeEventListener('scroll', handleScroll, false);
  }, []);

  return (
    <ScrollIndicatorWrapper
      data-aos="fade-in"
      style={{
        opacity: scrollProgress <= SCROLL_INDICATOR_VISIBILITY_THRESHOLD ? 0 : 1,
        cursor: scrollProgress <= SCROLL_INDICATOR_VISIBILITY_THRESHOLD ? 'none' : 'pointer',
      }}
      onClick={scrollProgress <= SCROLL_INDICATOR_VISIBILITY_THRESHOLD ? undefined : scrollIntoView('/home', { block: 'start' })}
      column
    >
      <SidewaysText color={getScrollColor(scrollProgress)}>
        {'Scroll to top'}
      </SidewaysText>
      <ScrollIndicatorProgress
        progress={scrollProgress}
        style={{
          height: `${SCROLL_INDICATOR_HEIGHT * (scrollProgress * 0.01)}px`,
        }}
      />
    </ScrollIndicatorWrapper>
  );
};

ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;
