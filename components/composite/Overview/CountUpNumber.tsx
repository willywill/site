import { useRef } from "react";
import type { RefObject } from "react";
import { useCountUp } from "react-countup";
import { PRIMARY_COLOR } from "../../../utils/theme";
import { Text } from "../../ui";

type CountUpNumberProps = {
	end: number | string;
};

const CountUpNumber = ({ end }: CountUpNumberProps) => {
	const countRef = useRef<HTMLElement>(null);
	const numericEnd = typeof end === "string" ? Number(end) : end;

	useCountUp({
		ref: countRef as RefObject<HTMLElement>,
		end: numericEnd,
		useEasing: true,
		duration: 3,
		enableScrollSpy: true,
		scrollSpyOnce: true,
	});

	return <Text ref={countRef as RefObject<HTMLParagraphElement>} extraLarge bold color={PRIMARY_COLOR} />;
};

CountUpNumber.displayName = "CountUpNumber";

export default CountUpNumber;
