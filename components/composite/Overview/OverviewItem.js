import { string } from 'prop-types';
import React from 'react';
import { WHITE } from '../../../utils/theme';
import { Box, Text } from '../../ui';
import OverviewItemContainer from './OverviewItemContainer';

const OverviewItem = ({ title, description, imageUrl, link }) => (
  // TODO: Update prop to url to fix it
  <OverviewItemContainer imageUrl={imageUrl} link={link}>
    <Text medium bold color={WHITE} letterSpacing={-1.56}>
      {title}
    </Text>
    <Box mt={3}>
      <Text data-aos="fly-in" large bold color={WHITE} letterSpacing={-1.56}>
        {description}
      </Text>
    </Box>
  </OverviewItemContainer>
);

OverviewItem.displayName = 'OverviewItem';

OverviewItem.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  imageUrl: string.isRequired,
  link: string.isRequired,
};

export default OverviewItem;
