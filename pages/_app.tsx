import AOS from "aos";
import values from "lodash/fp/values";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "aos/dist/aos.css";
import { breakpoints } from "../utils/theme";

const theme = {
	breakpoints: values(breakpoints) as string[],
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		AOS.init({
			easing: "custom-easing",
			once: true,
			offset: 200,
			duration: 400,
		} as unknown as Aos.AosOptions);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
