import styled, { css, keyframes } from "styled-components";
import { scrollIntoView } from "../../utils/animation";
import {
	breakpoints,
	easingFunction,
	mediaQueryLessThan,
	PRIMARY_COLOR,
	SUBTITLE_COLOR,
} from "../../utils/theme";
import Box from "./styled/Box";
import Text from "./styled/Text";

const NavbarItemWrapper = styled(Box)`
  overflow-x: hidden;
  padding: 0px 5px;
  cursor: pointer;
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100px);
    background-color: ${SUBTITLE_COLOR};
  }

  to {
    transform: translateX(0px);
    background-color: ${PRIMARY_COLOR};
  }
`;

const AnimatedUnderline = styled.div<{ $isCurrentLink?: boolean }>`
  width: 100%;
  height: 2px;
  margin-top: 8px;
  background-color: ${PRIMARY_COLOR};
  transform: translateX(-100px);
  transition: transform 0.5s ${easingFunction};
  animation: ${(props) =>
		props.$isCurrentLink ? css`${slideRight} 0.5s 0.5s ${easingFunction}` : ""};
  animation-fill-mode: forwards;

  ${NavbarItemWrapper}:hover & {
    transform: translateX(0px);
  }
`;

const NavbarText = styled(Text)`
  font-size: 1.25em;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.87em;
  }
`;

type NavbarItemProps = {
	label: string;
	link: string;
	external?: boolean;
};

const NavbarItem = ({ link, label, external = false }: NavbarItemProps) => {
	const isCurrentLink = link === "/";

	const content = (
		<>
			<NavbarText color={PRIMARY_COLOR} bold weight={700} letterSpacing={-1}>
				{label}
			</NavbarText>
			<AnimatedUnderline $isCurrentLink={isCurrentLink} />
		</>
	);

	if (external) {
		return (
			<NavbarItemWrapper
				as="a"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				mr={mediaQueryLessThan(4, "mobileLarge", "24px")}
				style={{ textDecoration: "none", color: "inherit" }}
			>
				{content}
			</NavbarItemWrapper>
		);
	}

	return (
		<NavbarItemWrapper
			mr={mediaQueryLessThan(4, "mobileLarge", "24px")}
			onClick={scrollIntoView(link, {
				block: link === "/my-work" ? "start" : "center",
			})}
		>
			{content}
		</NavbarItemWrapper>
	);
};

NavbarItem.displayName = "NavbarItem";

export default NavbarItem;
