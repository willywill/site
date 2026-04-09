import Head from "next/head";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import analytics from "../../lib/analytics";
import {
	SEO_DEFAULT_TITLE,
	SEO_DESCRIPTION,
	SEO_OG_IMAGE,
	SEO_OG_TITLE,
	SEO_ROBOTS,
	SEO_TWITTER_HANDLE,
	SITE_URL,
} from "../../lib/siteSeo";
import { animateOnScrollAddOns } from "../../utils/animation";
import { HIGHLIGHT_COLOR, WHITE } from "../../utils/theme";
import { Flex } from ".";

const GlobalStyle = createGlobalStyle`
  ${reset};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  ::selection { background-color: ${HIGHLIGHT_COLOR}; }
  ::-webkit-selection { background-color: ${HIGHLIGHT_COLOR}; }
  ::-moz-selection { background-color: ${HIGHLIGHT_COLOR}; }
  scroll-behavior: smooth;

  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }

  /* Animate-on-scroll Add-Ons */
  ${animateOnScrollAddOns}
`;

type PageProps = {
	children: ReactNode;
	backgroundColor?: string;
};

const Page = ({ children, backgroundColor = WHITE }: PageProps) => {
	useEffect(() => {
		if (typeof window !== "undefined" && !window.ANALYTICS_INITIALIZED) {
			analytics.load();
			window.ANALYTICS_INITIALIZED = true;
		}
	}, []);

	return (
		<Flex
			w={1}
			background={backgroundColor}
			column
			align="center"
			justify="center"
			style={{ minHeight: "100vh", position: "relative" }}
		>
			<Head>
				<title>{SEO_DEFAULT_TITLE}</title>
				<meta name="description" content={SEO_DESCRIPTION} />
				<meta name="robots" content={SEO_ROBOTS} />
				<link rel="canonical" href={SITE_URL} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={SITE_URL} />
				<meta property="og:title" content={SEO_OG_TITLE} />
				<meta property="og:description" content={SEO_DESCRIPTION} />
				<meta property="og:image" content={SEO_OG_IMAGE.url} />
				<meta property="og:image:width" content={String(SEO_OG_IMAGE.width)} />
				<meta
					property="og:image:height"
					content={String(SEO_OG_IMAGE.height)}
				/>
				<meta property="og:image:alt" content={SEO_OG_IMAGE.alt} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={SEO_TWITTER_HANDLE} />
				<meta name="twitter:creator" content={SEO_TWITTER_HANDLE} />
				<meta name="twitter:title" content={SEO_OG_TITLE} />
				<meta name="twitter:description" content={SEO_DESCRIPTION} />
				<meta name="twitter:image" content={SEO_OG_IMAGE.url} />
				<meta name="twitter:image:alt" content={SEO_OG_IMAGE.alt} />
			</Head>
			{children}
			<GlobalStyle />
		</Flex>
	);
};

Page.displayName = "Page";

export default Page;
