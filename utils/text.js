import { css } from 'styled-components';
import {
  SECONDARY_FONT,
  PRIMARY_FONT,
  SMALL_SIZE,
  MEDIUM_SIZE,
  LARGE_SIZE,
  EXTRA_LARGE_SIZE,
  LIGHT_COLOR,
  WHITE,
} from './theme';

const getTextColor = ({ white, lighter, color }) => {
  if (color) {
    return color;
  }
  if (white) {
    return WHITE;
  }
  if (lighter) {
    return LIGHT_COLOR;
  }
  return '';
};

const getTextTransform = ({ uppercase, capitalize }) => {
  if (uppercase) {
    return 'uppercase';
  }
  if (capitalize) {
    return 'capitalize';
  }

  return '';
};

const getTextAlign = ({ center, right }) => {
  if (center) {
    return 'center';
  }
  if (right) {
    return 'right';
  }
  return 'left';
};

const getFontFamily = ({ font, secondary }) => {
  if (font) {
    return font;
  }
  if (secondary) {
    return SECONDARY_FONT;
  }
  return PRIMARY_FONT;
};

const getFontSize = ({
  small, medium, large, extraLarge, fontSize,
}) => {
  if (fontSize) {
    return fontSize;
  }
  if (small) {
    return SMALL_SIZE;
  }
  if (medium) {
    return MEDIUM_SIZE;
  }
  if (large) {
    return LARGE_SIZE;
  }
  if (extraLarge) {
    return EXTRA_LARGE_SIZE;
  }
  return '';
};

const getFontWeight = ({ bold, thin, weight }) => {
  if (weight) {
    return weight;
  }
  if (bold) {
    return 'bolder';
  }
  if (thin) {
    return 'lighter';
  }
  return 'normal';
};

const getLetterSpacing = ({ letterSpacing = 0 }) => `${letterSpacing}px`;

/**
 * Text Mixin
 */
const textMixin = css`
  color: ${(props) => getTextColor(props)};
  text-transform: ${(props) => getTextTransform(props)};
  text-align: ${(props) => getTextAlign(props)};
  font-family: ${(props) => getFontFamily(props)};
  font-size: ${(props) => getFontSize(props)};
  font-weight: ${(props) => getFontWeight(props)};
  letter-spacing: ${(props) => getLetterSpacing(props)};
  margin: 0;
`;

export default textMixin;
