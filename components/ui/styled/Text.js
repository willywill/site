import { bool, number, string } from 'prop-types';
import styled from 'styled-components';
import textMixin, { getMobileFontSize } from '../../../utils/text';
import { breakpoints } from '../../../utils/theme';

const Text = styled.p`
  ${textMixin};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${(props) => getMobileFontSize(props)};
    letter-spacing: ${(props) => `${Math.max(-0.8, props.letterSpacing)}px`};
  }
`;

Text.propTypes = {
  // Text color props
  color: string,
  white: bool,
  lighter: bool,
  // Text transform props
  uppercase: bool,
  capitalize: bool,
  // Text align props
  center: bool,
  right: bool,
  // Text font family props
  font: string,
  secondary: bool,
  // Text size props
  small: bool,
  medium: bool,
  large: bool,
  extraLarge: bool,
  // Text font weight props
  weight: number,
  bold: bool,
  thin: bool,
  // Letter spacing prop
  letterSpacing: number,
};

export default Text;
