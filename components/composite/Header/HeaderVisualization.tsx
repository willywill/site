import throttle from "lodash/fp/throttle";
import { useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import { getFadeInAnimation } from "../../../utils/animation";
import { breakpoints, easingFunction } from "../../../utils/theme";

const ImageLayer = styled.div<{ src: string; depth: number }>`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: 520px 0px;
  background-repeat: no-repeat;
  opacity: 0.0;
  position: absolute;
  transition: background-position 1s ${easingFunction};
  animation: ${getFadeInAnimation(1.0)} 0.4s 0.5s ${easingFunction};
  animation-fill-mode: forwards;

  filter: ${(props) => `blur(${2.75 * props.depth}px)`};

  @media (max-width: ${breakpoints.tablet}) {
    background-image: none;
    display: none;
  }
`;

const HeaderVisualization = () => {
	const parallax = useCallback((e: MouseEvent) => {
		if (window.innerWidth < 650) return;

		const elem1 = document.querySelector("#parallax1");
		const elem2 = document.querySelector("#parallax2");
		const elem3 = document.querySelector("#parallax3");
		const w = window.innerWidth / 2;
		const h = window.innerHeight / 2;
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const depth1 = `${0.198 * window.innerWidth - (mouseX - w) * 0.02}px ${50 - (mouseY - h) * 0.01}px`;
		const depth2 = `${0.232 * window.innerWidth - (mouseX - w) * 0.1}px ${50 - (mouseY - h) * 0.2}px`;
		const depth3 = `${0.198 * window.innerWidth - (mouseX - w) * 0.05}px ${50 - (mouseY - h) * 0.08}px`;
		const pos1 = depth3;
		const pos2 = depth2;
		const pos3 = depth1;
		if (elem1 instanceof HTMLElement && elem1.style) {
			elem1.style.backgroundPosition = pos1;
			if (elem2 instanceof HTMLElement) elem2.style.backgroundPosition = pos2;
			if (elem3 instanceof HTMLElement) elem3.style.backgroundPosition = pos3;
		}
	}, []);

	const throttledParallax = useMemo(
		() => throttle(100, parallax) as (e: MouseEvent) => void,
		[parallax],
	);

	useEffect(() => {
		if (window.innerWidth > 650) {
			document.addEventListener("mousemove", throttledParallax);

			return () => document.removeEventListener("mousemove", throttledParallax);
		}
		return undefined;
	}, [throttledParallax]);

	return (
		<>
			<ImageLayer
				src="/visualizations/scene-1.webp"
				id="parallax1"
				depth={0.0}
			/>
			<ImageLayer
				src="/visualizations/scene-2.webp"
				id="parallax2"
				depth={0.5}
			/>
			<ImageLayer
				src="/visualizations/scene-3.webp"
				id="parallax3"
				depth={1.0}
			/>
		</>
	);
};

export default HeaderVisualization;
