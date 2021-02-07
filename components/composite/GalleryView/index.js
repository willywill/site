import React from 'react';
import { arrayOf, bool, string } from 'prop-types';
import { Box, Flex, Text } from '../../ui';
import MainView from './MainView';
import SubView from './SubView';
import { EXTRA_DARK, PRIMARY_COLOR, SUBTITLE_COLOR } from '../../../utils/theme';

const GalleryView = ({ title, description, images, flip }) => {
  // eslint-disable-next-line no-unused-vars
  const img = images;

  return (
    <Flex width={1} flexDirection={flip ? 'row-reverse' : 'row'}>
      <Flex column>
        <MainView />
        <Flex width={1} mt={2} justify="space-between">
          <SubView />
          <SubView />
          <SubView />
        </Flex>
      </Flex>
      <Flex height="420px" mx={4} justify="flex-end" column>
        <Flex width={0.9} ml={4} data-aos="fly-in" align="center" justify={flip ? 'flex-end' : 'flex-start'}>
          <Box width="50px" height="2px" mr={2} background={PRIMARY_COLOR} />
          <Text large bold color={EXTRA_DARK} letterSpacing={-2.56}>
            {title}
          </Text>
        </Flex>
        <Box width={0.9} data-aos="fade-in" mt={2} ml={4}>
          <Text right={flip} fontSize="1.3rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
            {description}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

GalleryView.displayName = 'GalleryView';

GalleryView.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  images: arrayOf(string).isRequired,
  flip: bool,
};

GalleryView.defaultProps = {
  flip: false,
};

export default GalleryView;
