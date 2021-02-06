/* eslint-disable react/jsx-props-no-spreading */
import { bool, number, shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { DARK_TITLE_COLOR, PRIMARY_COLOR, SUBTITLE_COLOR, WHITE } from '../../utils/theme';
import { Box, Flex, Heading, Text } from '../ui';

const headingThemes = {
  default: {
    positionColor: DARK_TITLE_COLOR,
    headingColor: PRIMARY_COLOR,
    underlineColor: SUBTITLE_COLOR,
  },
  light: {
    positionColor: WHITE,
    headingColor: WHITE,
    underlineColor: WHITE,
  },
};

const getTheme = (theme) => headingThemes[theme] || headingThemes.default;

const HeadingUnderline = styled.div`
  height: 5px;
  width: 100%;
  margin-top: 10px;
  opacity: 0.7;
  background-color: ${(props) => props.color};
`;

const SectionHeading = ({
  size,
  position,
  text,
  theme,
  flip,
  animationProps,
}) => {
  const { positionColor, headingColor, underlineColor } = getTheme(theme);

  return (
    <Flex
      width={1}
      pl={flip ? undefined : 7}
      pr={flip ? 7 : undefined}
      justify={flip ? 'flex-end' : undefined}
    >
      {position && (
        <Box mr={1}>
          <Text small color={positionColor}>
            {position}
          </Text>
        </Box>
      )}
      <Flex column>
        <Heading
          data-aos="fly-in"
          {...animationProps}
          center
          extraLarge
          color={headingColor}
          weight={700}
          letterSpacing={-2.56}
          size={size}
        >
          {text}
        </Heading>
        <Box
          ml={flip ? undefined : '20px'}
          mr={flip ? '20px' : undefined}
        >
          <HeadingUnderline
            data-aos={flip ? 'slide-right' : 'slide-left'}
            {...animationProps}
            color={underlineColor}
            flip={flip}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

SectionHeading.displayName = 'SectionHeading';

SectionHeading.propTypes = {
  size: number,
  position: string,
  text: string.isRequired,
  theme: string,
  flip: bool,
  animationProps: shape({}),
};

SectionHeading.defaultProps = {
  size: 2,
  position: undefined,
  theme: 'default',
  flip: false,
  animationProps: {},
};

export default SectionHeading;
