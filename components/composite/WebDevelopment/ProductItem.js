import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {
  breakpoints, EXTRA_DARK, mediaQueryLessThan,
  MEDIUM_SIZE, PRIMARY_COLOR, SUBTITLE_COLOR,
} from '../../../utils/theme';
import { Box, Flex, Text } from '../../ui';

const ProductImage = styled.div`
  width: 500px;
  height: 625px;
  background-color: ${PRIMARY_COLOR};
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;

  @media screen and (max-width: ${breakpoints.desktopMedium}) {
    width: 400px;
    height: 525px;
  }

  @media (max-width: ${breakpoints.desktopSmall}) {
    width: 400px;
    height: 525px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 300px;
    height: 425px;
  }
`;

const ProductTitle = styled(Text)`
  font-size: ${MEDIUM_SIZE};

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 1.2em;
  }
`;

const ProductItem = ({ title, description, imageUrl }) => (
  <Flex my={4} align="center" column>
    <ProductImage imageUrl={imageUrl} />
    <Flex width={mediaQueryLessThan(500, 'mobileLarge', 300)} column>
      <Flex data-aos="fly-in" ml={4} mt={4} align="center">
        <Box width={mediaQueryLessThan(50, 'mobileLarge', 25)} height="2px" mr={2} background={PRIMARY_COLOR} />
        <ProductTitle bold color={EXTRA_DARK} letterSpacing={-1}>
          {title}
        </ProductTitle>
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
