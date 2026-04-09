import styled from "styled-components";
import { PRIMARY_COLOR } from "../../utils/theme";

const Bar = styled.div<{ color?: string }>`
  width: 100px;
  height: 4px;
  opacity: 0.4;
  background-color: ${(props) => props.color || PRIMARY_COLOR};
`;

type AccentBarProps = {
	reversed?: boolean;
	animateImmediately?: boolean;
	color?: string;
};

const AccentBar = ({ reversed, animateImmediately, color }: AccentBarProps) => (
	<Bar
		color={color}
		data-aos={reversed ? "accent-slide-in-reversed" : "accent-slide-in"}
		data-aos-duration="1200"
		data-aos-offset={animateImmediately ? "0" : reversed ? "100" : "650"}
	/>
);

export default AccentBar;
