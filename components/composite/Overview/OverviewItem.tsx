import { WHITE } from "../../../utils/theme";
import { Box, Text } from "../../ui";
import OverviewItemContainer from "./OverviewItemContainer";

type OverviewItemProps = {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
};

const OverviewItem = ({
	title,
	description,
	imageUrl,
	link,
}: OverviewItemProps) => (
	<OverviewItemContainer url={imageUrl} link={link}>
		<Text medium bold color={WHITE} letterSpacing={-1.56}>
			{title}
		</Text>
		<Box mt={3}>
			<Text data-aos="fly-in" large bold color={WHITE} letterSpacing={-1.56}>
				{description}
			</Text>
		</Box>
	</OverviewItemContainer>
);

OverviewItem.displayName = "OverviewItem";

export default OverviewItem;
