import styled from "styled-components";
import {
	breakpoints,
	EXTRA_DARK,
	MEDIUM_SIZE,
	mediaQueryLessThan,
	PRIMARY_COLOR,
	SUBTITLE_COLOR,
} from "../../../utils/theme";
import { Box, Flex, Text } from "../../ui";

const ProductImage = styled.div<{ imageUrl: string }>`
  width: 500px;
  height: 625px;
  background-color: ${PRIMARY_COLOR};
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;

  @media screen and (max-width: ${breakpoints.desktopMedium}) {
    width: 400px;
    height: 525px;
  }

  @media (max-width: ${breakpoints.desktopSmall}) {
    width: 400px;
    height: 525px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 300px;
    height: 425px;
  }
`;

const ProductTitle = styled(Text)`
  font-size: ${MEDIUM_SIZE};

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 1.2em;
  }
`;

type ProductItemProps = {
	title: string;
	description: string;
	imageUrl: string;
};

const ProductItem = ({ title, description, imageUrl }: ProductItemProps) => (
	<Flex my={4} align="center" column>
		<ProductImage imageUrl={imageUrl} />
		<Flex width={mediaQueryLessThan(500, "mobileLarge", 300)} column>
			<Flex data-aos="fly-in" ml={4} mt={4} align="center">
				<Box
					width={mediaQueryLessThan(50, "mobileLarge", 25)}
					height="2px"
					mr={2}
					background={PRIMARY_COLOR}
				/>
				<ProductTitle bold color={EXTRA_DARK} letterSpacing={-1}>
					{title}
				</ProductTitle>
			</Flex>
			<Box data-aos="fly-in" mt={2} ml={4}>
				<Text color={SUBTITLE_COLOR} letterSpacing={-0.3}>
					{description}
				</Text>
			</Box>
		</Flex>
	</Flex>
);

ProductItem.displayName = "ProductItem";

export default ProductItem;
