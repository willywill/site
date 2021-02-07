import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';
import { getFadeInAnimation, scrollIntoView } from '../../../utils/animation';
import { easingFunction, PRIMARY_COLOR, WHITE } from '../../../utils/theme';
import { Box, Flex, Text } from '../../ui';

const OverviewItemComponent = styled(Flex)`
  width: 25vw;
  height: 700px;
  padding: 32px;
  background-image: ${(props) => `url(${props.url})`};
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: filter 0.5s ${easingFunction}, background-size 0.5s ${easingFunction};
  filter: saturate(0.2);
  cursor: pointer;
  animation: ${getFadeInAnimation(1.0)} 1s ${easingFunction};
  
  &:hover {
    filter: saturate(0.85);
    background-size: auto 102%;
  }
`;

const HelpTextBox = styled(Box)`
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.5s ${easingFunction}, opacity 0.5s ${easingFunction};

  ${OverviewItemComponent}:hover & {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const HelpText = styled(Text)`
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.5s ${easingFunction}, opacity 0.5s ${easingFunction};

  ${OverviewItemComponent}:hover & {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const OverviewItemContainer = ({ url, link, children }) => (
  <OverviewItemComponent
    url={url}
    onClick={scrollIntoView(link, { block: 'start' })}
    column
    justify="space-between"
  >
    <Box>
      {children}
    </Box>
    <Flex pb={1} align="center">
      <HelpTextBox width={0.15} height="3px" background={PRIMARY_COLOR} mr={2} />
      <HelpText color={WHITE} letterSpacing={-0.3}>
        {'Click to scroll to section'}
      </HelpText>
    </Flex>
  </OverviewItemComponent>
);

OverviewItemContainer.displayName = 'OverviewItemContainer';

OverviewItemContainer.propTypes = {
  url: string.isRequired,
  link: string.isRequired,
  children: node.isRequired,
};

export default OverviewItemContainer;
