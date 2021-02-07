import { string } from 'prop-types';
import React from 'react';
import { EXTRA_DARK, PRIMARY_COLOR, SUBTITLE_COLOR } from '../../../utils/theme';
import { Box, Flex, Text } from '../../ui';

const ProductItem = ({ title, description, imageUrl }) => (
  <Flex my={4} align="center" column>
    <Box width="600px" height="800px" background={PRIMARY_COLOR} imageUrl={imageUrl} style={{ opacity: 0.15 }} />
    <Flex width={600} column>
      <Flex data-aos="fly-in" ml={4} mt={4} align="center">
        <Box width="50px" height="2px" mr={2} background={PRIMARY_COLOR} />
        <Text medium bold color={EXTRA_DARK} letterSpacing={-1}>
          {title}
        </Text>
      </Flex>
      <Box data-aos="fly-in" mt={2} ml={4}>
        <Text color={SUBTITLE_COLOR} letterSpacing={-0.3}>
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
