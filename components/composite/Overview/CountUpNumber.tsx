import type { RefObject } from "react";
import { useCallback, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { PRIMARY_COLOR } from "../../../utils/theme";
import { Text } from "../../ui";

type CountUpNumberProps = {
	end: number | string;
};

const CountUpNumber = ({ end }: CountUpNumberProps) => {
	const countRef = useRef<HTMLParagraphElement>(null);
	const numericEnd = typeof end === "string" ? Number(end) : end;

	const { start, reset } = useCountUp({
		ref: countRef as RefObject<HTMLElement>,
		end: numericEnd,
		useEasing: true,
		duration: 3,
		startOnMount: false,
	});

	const handleAnimateInEvent = useCallback(
		(e: Event) => {
			const detail = (e as CustomEvent<{ id?: string }>).detail;
			if (detail?.id === "count-up") {
				reset();
				start();
			}
		},
		[reset, start],
	);

	useEffect(() => {
		document.addEventListener("aos:in", handleAnimateInEvent);
		return () => {
			document.removeEventListener("aos:in", handleAnimateInEvent);
		};
	}, [handleAnimateInEvent]);

	return <Text ref={countRef} extraLarge bold color={PRIMARY_COLOR} />;
};

CountUpNumber.displayName = "CountUpNumber";

export default CountUpNumber;
