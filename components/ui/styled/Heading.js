import { number } from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import textMixin from '../../../utils/text';
import { breakpoints } from '../../../utils/theme';

const responsiveSizing = css`
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.95em;
    letter-spacing: -1.56px;
  }
`;

const getHeadingFromSize = {
  1: styled.h1`${textMixin} ${responsiveSizing}`,
  2: styled.h2`${textMixin} ${responsiveSizing}`,
  3: styled.h3`${textMixin} ${responsiveSizing}`,
  4: styled.h4`${textMixin} ${responsiveSizing}`,
  5: styled.h5`${textMixin} ${responsiveSizing}`,
  6: styled.h6`${textMixin} ${responsiveSizing}`,
};

const Heading = ({ size, ...textProps }) => {
  const HeadingComponent = getHeadingFromSize[size];

  if (!HeadingComponent) return null;

  return <HeadingComponent {...textProps} />;
};

Heading.displayName = 'Heading';

Heading.propTypes = {
  size: number.isRequired,
};

export default Heading;
