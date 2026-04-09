import type { ReactNode } from "react";
import { easingFunction } from "../../../utils/theme";
import RellaxWrapper from "../../ui/RellaxWrapper";

type ImageWrapperProps = {
	children: ReactNode;
	slow?: boolean;
};

const ImageWrapper = ({ slow = false, children }: ImageWrapperProps) => (
	<RellaxWrapper
		speed={2}
		percentage={0.9}
		style={{
			transition: `transform ${slow ? 1.7 : 1.2}s ${easingFunction}`,
		}}
	>
		{children}
	</RellaxWrapper>
);

ImageWrapper.displayName = "ImageWrapper";

export default ImageWrapper;
