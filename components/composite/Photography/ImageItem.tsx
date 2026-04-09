import styled from "styled-components";
import {
	breakpoints,
	EXTRA_DARK,
	easingFunction,
	MEDIUM_SIZE,
	mediaQueryLessThan,
	PRIMARY_COLOR,
	SUBTITLE_COLOR,
} from "../../../utils/theme";
import { Box, Flex, Text } from "../../ui";
import RellaxWrapper from "../../ui/RellaxWrapper";
import ImageBackground from "./ImageBackground";

const ImageTitle = styled(Text)`
  font-size: ${MEDIUM_SIZE};

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 1.2em;
  }
`;

type ImageItemProps = {
	src: string;
	title: string;
	description: string;
	flip?: boolean;
};

const ImageItem = ({
	src,
	title,
	description,
	flip = false,
}: ImageItemProps) => (
	<Flex justify="center" column>
		<ImageBackground src={src} flip={flip} />
		<RellaxWrapper
			speed={-0.1}
			style={{
				transition: `transform 2s ${easingFunction}`,
			}}
		>
			<Flex
				data-aos="fly-in"
				data-aos-offset="-600"
				ml={mediaQueryLessThan(4, "desktopSmall", 1)}
				align="center"
			>
				<Box
					width={mediaQueryLessThan(50, "mobileLarge", 25)}
					height="2px"
					mr={2}
					background={PRIMARY_COLOR}
				/>
				<ImageTitle medium bold color={EXTRA_DARK} letterSpacing={-1}>
					{title}
				</ImageTitle>
			</Flex>
			<Box
				maxWidth="320px"
				mt={2}
				ml={mediaQueryLessThan(4, "desktopSmall", 1)}
				mr={1}
			>
				<Text
					data-aos="fade-in"
					data-aos-offset="-600"
					color={SUBTITLE_COLOR}
					letterSpacing={-0.3}
				>
					{description}
				</Text>
			</Box>
		</RellaxWrapper>
	</Flex>
);

ImageItem.displayName = "ImageItem";

export default ImageItem;
