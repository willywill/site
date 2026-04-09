import debounce from "lodash/fp/debounce";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { scrollIntoView } from "../../../utils/animation";
import {
	breakpoints,
	easingFunction,
	PRIMARY_COLOR,
	PRIMARY_COLOR_TRANSLUCENT,
	SUBTITLE_COLOR,
	WHITE,
} from "../../../utils/theme";
import { Flex, Text } from "../../ui";

const SCROLL_INDICATOR_HEIGHT = 50;
const SCROLL_INDICATOR_VISIBILITY_THRESHOLD = 7;

const SidewaysText = styled(Text)`
  writing-mode: vertical-rl;
  transform: scale(-1, -1);
  position: fixed;
  top: 50vh;
  left: 50px;
  color: ${(props) => props.color || SUBTITLE_COLOR};
  transition: color 0.5s ${easingFunction};
  z-index: 3;
`;

const ScrollIndicatorProgress = styled.div`
  position: fixed;
  width: 3px;
  background-color: ${PRIMARY_COLOR};
  top: calc(50vh + 100px);
  left: 55px; 
  transform: scale(-1);
  z-index: 3;

  &::before {
    content: "";
    position: fixed;
    bottom: 0;
    left: 0; 
    width: 3px;
    height: ${SCROLL_INDICATOR_HEIGHT}px;
    background-color: ${PRIMARY_COLOR_TRANSLUCENT};
  }
`;

const ScrollIndicatorWrapper = styled(Flex)`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const getScrollColor = (scrollPercentage: number) => {
	if (scrollPercentage >= 91 && scrollPercentage <= 99) {
		return WHITE;
	}

	return SUBTITLE_COLOR;
};

const ScrollIndicator = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		if (window.innerWidth > 650) {
			const handleScroll = () => {
				const scrollAmount =
					document.body.scrollTop || document.documentElement.scrollTop;
				const totalHeight =
					document.documentElement.scrollHeight -
					document.documentElement.clientHeight;
				const scrollPercentage = (scrollAmount / totalHeight) * 100;
				setScrollProgress(scrollPercentage);
			};

			const debounced = debounce(15, handleScroll) as EventListener;
			document.addEventListener("scroll", debounced, false);

			return () => document.removeEventListener("scroll", debounced, false);
		}

		return undefined;
	}, []);

	return (
		<ScrollIndicatorWrapper
			style={{
				opacity:
					scrollProgress <= SCROLL_INDICATOR_VISIBILITY_THRESHOLD ? 0 : 1,
				cursor:
					scrollProgress <= SCROLL_INDICATOR_VISIBILITY_THRESHOLD
						? "none"
						: "pointer",
			}}
			onClick={
				scrollProgress <= SCROLL_INDICATOR_VISIBILITY_THRESHOLD
					? undefined
					: scrollIntoView("/home", { block: "start" })
			}
			column
		>
			<SidewaysText color={getScrollColor(scrollProgress)}>
				{"Scroll to top"}
			</SidewaysText>
			<ScrollIndicatorProgress
				style={{
					height: `${SCROLL_INDICATOR_HEIGHT * (scrollProgress * 0.01)}px`,
				}}
			/>
		</ScrollIndicatorWrapper>
	);
};

ScrollIndicator.displayName = "ScrollIndicator";

export default ScrollIndicator;
