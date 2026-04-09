import styled from "styled-components";
import type { TextMixinProps } from "../../../utils/text";
import textMixin, { getMobileFontSize } from "../../../utils/text";
import { breakpoints } from "../../../utils/theme";

const Text = styled.p<TextMixinProps>`
  ${textMixin};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${(props) => getMobileFontSize(props)};
    letter-spacing: ${(props) =>
			`${Math.max(-0.8, props.letterSpacing ?? 0)}px`};
  }
`;

export default Text;
