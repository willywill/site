import { useState } from "react";
import styled from "styled-components";
import {
	easingFunction,
	PRIMARY_COLOR,
	SUBTITLE_COLOR,
} from "../../../utils/theme";
import { Box, Flex, Text } from "../../ui";

const TextWithHover = styled(Text)`
  cursor: pointer;
`;

const IconFadeIn = styled.i<{ $isHover: boolean }>`
  color: ${PRIMARY_COLOR};
  opacity: ${(props) => (props.$isHover ? 1 : 0)};
  transform: ${(props) =>
		props.$isHover ? "translateX(0px)" : "translateX(-50px)"};
  transition: opacity 0.4s ${easingFunction}, transform 0.15s ${easingFunction};
`;

type ContactItemProps = {
	text: string;
	href: string;
};

const ContactItem = ({ text, href }: ContactItemProps) => {
	const [isHover, setHover] = useState(false);

	return (
		<a href={href} style={{ textDecoration: "none" }}>
			<Flex style={{ position: "relative" }}>
				<Box style={{ overflow: "hidden", position: "absolute", left: -20 }}>
					<IconFadeIn className="fa fa-chevron-right" $isHover={isHover} />
				</Box>
				<TextWithHover
					left
					bold
					color={SUBTITLE_COLOR}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					{text}
				</TextWithHover>
			</Flex>
		</a>
	);
};

ContactItem.displayName = "ContactItem";

export default ContactItem;
