import { string } from 'prop-types';
import React from 'react';
import { EXTRA_DARK, PRIMARY_COLOR, SUBTITLE_COLOR } from '../../../utils/theme';
import { Box, Flex, Text } from '../../ui';

const ProductItem = ({ title, description, imageUrl }) => (
  <Flex my={4} column>
    <Box width="600px" height="800px" background={PRIMARY_COLOR} imageUrl={imageUrl} style={{ opacity: 0.15 }} />
    <Flex width={600} column>
      <Flex ml={4} mt={4} align="center">
        <Box data-aos="fly-in" width="50px" height="2px" mr={2} background={PRIMARY_COLOR} />
        <Text data-aos="fly-in" medium bold color={EXTRA_DARK} letterSpacing={-1}>
          {title}
        </Text>
      </Flex>
      <Box mt={2} ml={4}>
        <Text data-aos="fly-in" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
          {description}
        </Text>
      </Box>
    </Flex>
  </Flex>
);

ProductItem.displayName = 'ProductItem';

ProductItem.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  imageUrl: string.isRequired,
};

export default ProductItem;
