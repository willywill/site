import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import { bool, node } from 'prop-types';
import { easingFunction } from '../../../utils/theme';

const ImageWrapper = ({ slow, children }) => (
  <RellaxWrapper
    speed={2}
    style={{
      width: '50%',
      height: '1000px',
      transition: `transform ${slow ? 1.7 : 1.2}s ${easingFunction}`,
    }}
  >
    {children}
  </RellaxWrapper>
);

ImageWrapper.displayName = 'ImageWrapper';

ImageWrapper.propTypes = {
  children: node.isRequired,
  slow: bool,
};

ImageWrapper.defaultProps = {
  slow: false,
};

export default ImageWrapper;
