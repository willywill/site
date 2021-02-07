import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import { bool, string } from 'prop-types';
import { easingFunction, EXTRA_DARK, PRIMARY_COLOR, SUBTITLE_COLOR } from '../../../utils/theme';
import { Box, Flex, Text } from '../../ui';
import ImageBackground from './ImageBackground';

const ImageItem = ({ src, title, description, flip }) => (
  <Flex justify="center" column>
    <ImageBackground src={src} flip={flip} />
    <RellaxWrapper
      speed={-0.1}
      style={{
        transition: `transform 2s ${easingFunction}`,
      }}
    >
      <Flex ml={4} align="center">
        <Box data-aos="fly-in" data-aos-offset="-600" width="50px" height="2px" mr={2} background={PRIMARY_COLOR} />
        <Text data-aos="fly-in" data-aos-offset="-600" medium bold color={EXTRA_DARK} letterSpacing={-1}>
          {title}
        </Text>
      </Flex>
      <Box mt={2} ml={4}>
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
