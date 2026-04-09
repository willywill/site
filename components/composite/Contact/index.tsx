import styled from "styled-components";
import { scrollIntoView } from "../../../utils/animation";
import {
	DARK_TITLE_COLOR,
	easingFunction,
	mediaQuery,
	mediaQueryLessThan,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	SUBTITLE_COLOR,
	WHITE,
} from "../../../utils/theme";
import { Box, Flex, Text } from "../../ui";
import ContactItem from "./ContactItem";

const HoverFlex = styled(Flex)`
  width: fit-content;
  cursor: pointer;
`;

const HoverText = styled(Text)`
  transition: color 0.5s ${easingFunction};

  ${HoverFlex}:hover & {
    color: ${PRIMARY_COLOR};
  }
`;

const HoverBox = styled(Box)`
  color: ${DARK_TITLE_COLOR};
  transition: color 0.5s ${easingFunction};

  ${HoverFlex}:hover & {
    color: ${PRIMARY_COLOR};
  }
`;

const CincinnatiMapLink = styled.a`
  display: block;
  line-height: 0;
`;

const CincinnatiImage = styled.img`
  display: block;
  width: 100%;
`;

const ContactSection = () => (
	<Flex
		as="section"
		id="/contact"
		width={1}
		background={WHITE}
		flexDirection={mediaQueryLessThan("row", "tablet", "column")}
	>
		<Box
			width={mediaQuery(0.5, {
				mobileSmall: 1,
				mobileLarge: 1,
				tablet: 1,
				desktopExtraLarge: 0.4,
				desktop4K: 0.35,
			})}
		>
			<CincinnatiMapLink href="https://www.google.com/maps/place/Cincinnati,+OH/">
				<CincinnatiImage src="/about-me/cincinnati.webp" alt="Map" />
			</CincinnatiMapLink>
		</Box>
		<Flex
			width={mediaQuery(0.5, {
				mobileSmall: 1,
				mobileLarge: 1,
				tablet: 1,
				desktopExtraLarge: 0.6,
				desktop4K: 0.65,
			})}
			column
		>
			<Box width={1} mb={5} background={SECONDARY_COLOR} height="25%" />
			<Flex
				width={1}
				height="100%"
				mt={mediaQueryLessThan(undefined, "tablet", 4)}
				pl={mediaQuery(5, { mobileSmall: 4, tablet: 6 })}
				pb={mediaQueryLessThan(7, "desktopSmall", 6)}
				justify="flex-end"
				column
			>
				<Text
					data-aos="fly-in"
					extraLarge
					color={PRIMARY_COLOR}
					weight={700}
					letterSpacing={-2.56}
				>
					{"Hello"}
				</Text>
				<Box style={{ overflow: "hidden" }} mt={4}>
					<Text
						data-aos="fly-in"
						data-aos-delay="800"
						large
						color={DARK_TITLE_COLOR}
						weight={700}
						letterSpacing={-2.56}
					>
						{"Let's touch base."}
					</Text>
				</Box>
				<Flex mt={48} column>
					<Box>
						<Text thin uppercase color={SUBTITLE_COLOR}>
							{"Will Germany"}
						</Text>
					</Box>
					<Box mt={4}>
						<ContactItem
							text="Cincinnati, Ohio"
							href="https://www.google.com/maps/place/Cincinnati,+OH/"
						/>
					</Box>
					<Box mt={3}>
						<ContactItem
							text="me@williamgermany.com"
							href="mailto:me@williamgermany.com"
						/>
					</Box>
					<Box mt={3}>
						<ContactItem
							text="https://linkedin.com/in/williamgermany"
							href="https://linkedin.com/in/williamgermany"
						/>
					</Box>
					<HoverFlex
						data-aos="fly-in"
						data-aos-delay="1000"
						mt={4}
						onClick={scrollIntoView("/openings")}
					>
						<HoverText color={SUBTITLE_COLOR} thin>
							{"See more details below"}
						</HoverText>
						<HoverBox ml={2}>
							<i className="fa fa-angle-down" />
						</HoverBox>
					</HoverFlex>
				</Flex>
			</Flex>
		</Flex>
	</Flex>
);

ContactSection.displayName = "ContactSection";

export default ContactSection;
