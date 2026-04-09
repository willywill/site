import type { PropsWithChildren } from "react";
import { createElement } from "react";
import styled, { css } from "styled-components";
import type { TextMixinProps } from "../../../utils/text";
import textMixin from "../../../utils/text";
import { breakpoints } from "../../../utils/theme";

const responsiveSizing = css`
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.95em;
    letter-spacing: -1.56px;
  }
`;

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const H1 = styled.h1`${textMixin} ${responsiveSizing}`;
const H2 = styled.h2`${textMixin} ${responsiveSizing}`;
const H3 = styled.h3`${textMixin} ${responsiveSizing}`;
const H4 = styled.h4`${textMixin} ${responsiveSizing}`;
const H5 = styled.h5`${textMixin} ${responsiveSizing}`;
const H6 = styled.h6`${textMixin} ${responsiveSizing}`;

const getHeadingFromSize = {
	1: H1,
	2: H2,
	3: H3,
	4: H4,
	5: H5,
	6: H6,
} as const;

export type HeadingProps = PropsWithChildren<
	TextMixinProps & { size: HeadingLevel }
>;

const Heading = ({ size, children, ...textProps }: HeadingProps) => {
	const HeadingComponent = getHeadingFromSize[size];

	if (!HeadingComponent) return null;

	return createElement(HeadingComponent, textProps, children);
};

Heading.displayName = "Heading";

export default Heading;
