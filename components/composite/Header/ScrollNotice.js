import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PRIMARY_COLOR, DARK_TITLE_COLOR, SUBTITLE_COLOR, easingFunction } from '../../../utils/theme';
import { Flex, Text } from '../../ui';

const ScrollNoticeContainer = styled(Flex)``;

const SidewaysText = styled(Text)`
  writing-mode: vertical-rl;
  transform: scale(-1, -1);
  position: absolute;
  top: 50vh;
  left: 20px;
`;

const getFlashColorAnimation = (property = 'color') => keyframes`
  0% {
    ${property}: ${DARK_TITLE_COLOR};
  }

  50% {
    ${property}: ${PRIMARY_COLOR};
  }

  100% {
    ${property}: ${DARK_TITLE_COLOR};
  }
`;

const ArrowTail = styled.div`
  width: 2px;
  height: 60px;
  background-color: ${DARK_TITLE_COLOR};
  position: absolute;
  top: calc(50vh + 140px);
  left: 26px;
  animation: 3s ${getFlashColorAnimation('background-color')} 0.5s ${easingFunction} infinite;
`;

const ArrowHead = styled.i.attrs({ className: 'fa fa-chevron-down' })`
  color: ${DARK_TITLE_COLOR};
  position: absolute;
  top: calc(50vh + 190px);
  left: 19px;
  animation: 3s ${getFlashColorAnimation('color')} 0.5s ${easingFunction} infinite;
`;

const ScrollNotice = () => (
  <ScrollNoticeContainer align="center" column>
    <SidewaysText color={SUBTITLE_COLOR}>
      {'Scroll to see more'}
    </SidewaysText>
    <ArrowTail />
    <ArrowHead />
  </ScrollNoticeContainer>
);

ScrollNotice.displayName = 'ScrollNotice';

export default ScrollNotice;
