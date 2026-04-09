import type { ComponentProps, ReactNode } from "react";
import BaseRellaxWrapper from "react-rellax-wrapper";

export type RellaxWrapperProps = ComponentProps<typeof BaseRellaxWrapper> & {
	children?: ReactNode;
};

const RellaxWrapper = (props: RellaxWrapperProps) => (
	<BaseRellaxWrapper {...props} />
);

export default RellaxWrapper;
