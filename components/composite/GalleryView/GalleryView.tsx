import {
	EXTRA_DARK,
	mediaQueryLessThan,
	PRIMARY_COLOR,
	SUBTITLE_COLOR,
} from "../../../utils/theme";
import { Box, Flex, Text } from "../../ui";
import MainView from "./MainView";
import SubView from "./SubView";
import type { GalleryMediaItem } from "./types";

type GalleryViewProps = {
	title: string;
	description: string;
	media: [
		GalleryMediaItem,
		GalleryMediaItem,
		GalleryMediaItem,
		GalleryMediaItem,
	];
	flip?: boolean;
	onClick: (orderId: number) => void;
};

const GalleryView = ({
	title,
	description,
	flip = false,
	media,
	onClick,
}: GalleryViewProps) => {
	const [mainMedia, media1, media2, media3] = media;

	return (
		<Flex
			width={1}
			align="center"
			flexDirection={mediaQueryLessThan(
				flip ? "row-reverse" : "row",
				"tablet",
				"column",
			)}
		>
			<Flex column>
				<Box width={1} data-aos="fly-in">
					<MainView media={mainMedia} />
				</Box>
				<Flex data-aos="fly-in" width={1} mt={2} justifyContent="space-between">
					<SubView media={media1} onClick={() => onClick(1)} />
					<SubView media={media2} onClick={() => onClick(2)} />
					<SubView media={media3} onClick={() => onClick(3)} />
				</Flex>
			</Flex>
			<Flex
				mt={mediaQueryLessThan("0px", "tablet", 4)}
				mx={mediaQueryLessThan(4, "tablet", "0px")}
				justify="flex-end"
				column
			>
				<Flex
					width={mediaQueryLessThan(0.9, "mobileLarge", "100vw")}
					ml={mediaQueryLessThan(4, "mobileLarge", "0px")}
					px={mediaQueryLessThan("0px", "mobileLarge", "15px")}
					data-aos="fly-in"
					align="center"
					justify={flip ? "flex-end" : "flex-start"}
				>
					<Box
						width={mediaQueryLessThan(50, "mobileLarge", 25)}
						height="2px"
						mr={2}
						background={PRIMARY_COLOR}
					/>
					<Text large bold color={EXTRA_DARK} letterSpacing={-2.56}>
						{title}
					</Text>
				</Flex>
				<Box
					width={mediaQueryLessThan(0.9, "mobileLarge", "100vw")}
					data-aos="fade-in"
					mt={2}
					ml={mediaQueryLessThan(4, "mobileLarge", "0px")}
					px={mediaQueryLessThan("0px", "mobileLarge", "15px")}
				>
					<Text
						right={flip}
						fontSize="1.3rem"
						color={SUBTITLE_COLOR}
						letterSpacing={-0.3}
					>
						{description}
					</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

GalleryView.displayName = "GalleryView";

export default GalleryView;
