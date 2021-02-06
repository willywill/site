import { number } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import textMixin from '../../../utils/text';

const getHeadingFromSize = {
  1: styled.h1`${textMixin};`,
  2: styled.h2`${textMixin};`,
  3: styled.h3`${textMixin};`,
  4: styled.h4`${textMixin};`,
  5: styled.h5`${textMixin};`,
  6: styled.h6`${textMixin};`,
};

const Heading = ({ size, ...textProps }) => {
  const HeadingComponent = getHeadingFromSize[size];

  if (!HeadingComponent) return null;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <HeadingComponent {...textProps} />;
};

Heading.displayName = 'Heading';

Heading.propTypes = {
  size: number.isRequired,
};

export default Heading;
