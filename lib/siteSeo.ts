/** Canonical site URL (no trailing slash); aligns Open Graph and canonical link. */
export const SITE_URL = "https://williamgermany.com";

export const SEO_DEFAULT_TITLE = "Portfolio";

export const SEO_DESCRIPTION =
	"I'm a self-taught software engineer working on full-stack web development, real-time computer graphics and photography.";

export const SEO_OG_TITLE = "Will Germany's Portfolio";

export const SEO_OG_IMAGE = {
	url: `${SITE_URL}/about-me/self.jpg`,
	width: 555,
	height: 555,
	alt: "Self Portrait",
} as const;

export const SEO_TWITTER_HANDLE = "@WillGermany";

/** Matches previous next-seo `robotsProps.maxImagePreview: "standard"`. */
export const SEO_ROBOTS = "max-image-preview:standard";
