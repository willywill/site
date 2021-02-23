import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import { bool, string } from 'prop-types';
import styled from 'styled-components';
import {
  easingFunction, EXTRA_DARK, mediaQuery, MEDIUM_SIZE,
  mediaQueryLessThan, PRIMARY_COLOR, SUBTITLE_COLOR, breakpoints,
} from '../../../utils/theme';
import { Box, Flex, Text } from '../../ui';
import ImageBackground from './ImageBackground';

const ImageTitle = styled(Text)`
  font-size: ${MEDIUM_SIZE};

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 1.2em;
  }
`;

const ImageItem = ({ src, title, description, flip }) => (
  <Flex justify="center" column>
    <ImageBackground src={src} flip={flip} />
    <RellaxWrapper
      speed={-0.1}
      style={{
        transition: `transform 2s ${easingFunction}`,
      }}
    >
      <Flex data-aos="fly-in" data-aos-offset="-600" ml={mediaQuery(4, { desktopSmall: 1 })} align="center">
        <Box width={mediaQueryLessThan(50, 'mobileLarge', 25)} height="2px" mr={2} background={PRIMARY_COLOR} />
        <ImageTitle medium bold color={EXTRA_DARK} letterSpacing={-1}>
          {title}
        </ImageTitle>
      </Flex>
      <Box mt={2} mx={4} ml={mediaQuery(4, { desktopSmall: 1 })}>
        <Text data-aos="fade-in" data-aos-offset="-600" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
          {description}
        </Text>
      </Box>
    </RellaxWrapper>
  </Flex>
);

ImageItem.displayName = 'ImageItem';

ImageItem.propTypes = {
  src: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  flip: bool,
};

ImageItem.defaultProps = {
  flip: false,
};

export default ImageItem;
