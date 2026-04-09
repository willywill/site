import { css } from "styled-components";
import {
	EXTRA_LARGE_SIZE,
	LARGE_SIZE,
	LIGHT_COLOR,
	MEDIUM_SIZE,
	PRIMARY_FONT,
	SECONDARY_FONT,
	SMALL_SIZE,
	WHITE,
} from "./theme";

export interface TextMixinProps {
	color?: string;
	white?: boolean;
	lighter?: boolean;
	uppercase?: boolean;
	capitalize?: boolean;
	center?: boolean;
	right?: boolean;
	left?: boolean;
	font?: string;
	secondary?: boolean;
	small?: boolean;
	medium?: boolean;
	large?: boolean;
	extraLarge?: boolean;
	fontSize?: string;
	weight?: number;
	bold?: boolean;
	thin?: boolean;
	letterSpacing?: number;
}

const getTextColor = ({ white, lighter, color }: TextMixinProps) => {
	if (color) {
		return color;
	}
	if (white) {
		return WHITE;
	}
	if (lighter) {
		return LIGHT_COLOR;
	}
	return "";
};

const getTextTransform = ({ uppercase, capitalize }: TextMixinProps) => {
	if (uppercase) {
		return "uppercase";
	}
	if (capitalize) {
		return "capitalize";
	}

	return "";
};

const getTextAlign = ({ center, right }: TextMixinProps) => {
	if (center) {
		return "center";
	}
	if (right) {
		return "right";
	}
	return "left";
};

const getFontFamily = ({ font, secondary }: TextMixinProps) => {
	if (font) {
		return font;
	}
	if (secondary) {
		return SECONDARY_FONT;
	}
	return PRIMARY_FONT;
};

const getFontSize = ({
	small,
	medium,
	large,
	extraLarge,
	fontSize,
}: TextMixinProps) => {
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
	return "";
};

export const getMobileFontSize = ({
	small,
	medium,
	large,
	extraLarge,
}: TextMixinProps) => {
	if (small) {
		return "0.6em";
	}
	if (medium) {
		return "0.75em";
	}
	if (large) {
		return "1.5em";
	}
	if (extraLarge) {
		return "1.75em";
	}
	return "0.875em";
};

const getFontWeight = ({ bold, thin, weight }: TextMixinProps) => {
	if (weight !== undefined) {
		return weight;
	}
	if (bold) {
		return "bolder";
	}
	if (thin) {
		return "lighter";
	}
	return "normal";
};

const getLetterSpacing = ({ letterSpacing = 0 }: TextMixinProps) =>
	`${letterSpacing}px`;

/**
 * Text Mixin
 */
const textMixin = css`
  color: ${(p) => getTextColor(p as TextMixinProps)};
  text-transform: ${(p) => getTextTransform(p as TextMixinProps)};
  text-align: ${(p) => getTextAlign(p as TextMixinProps)};
  font-family: ${(p) => getFontFamily(p as TextMixinProps)};
  font-size: ${(p) => getFontSize(p as TextMixinProps)};
  font-weight: ${(p) => getFontWeight(p as TextMixinProps)};
  letter-spacing: ${(p) => getLetterSpacing(p as TextMixinProps)};
  margin: 0;
`;

export default textMixin;
