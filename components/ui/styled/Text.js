import { bool, number, string } from 'prop-types';
import styled from 'styled-components';
import textMixin from '../../../utils/text';

const Text = styled.p`
  ${textMixin};
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
  // TODO: Text animations as a prop called `animation`
};

export default Text;
