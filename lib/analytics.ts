const runAnalyticsPageCapture = () => {
	fetch(
		`https://counter.dev/track?${new URLSearchParams({
			referrer: document.referrer,
			screen: `${screen.width}x${screen.height}`,
			user: "me@williamgermany.com",
			utcoffset: "-4",
		})}`,
	)
		.then(() => {
			sessionStorage.setItem("_swa", "1");
		})
		.catch((err: unknown) => console.warn(err));
};

const isAnalyticsSessionSet = () => sessionStorage.getItem("_swa");
const hasValidReferrer = () =>
	document.referrer.indexOf(`${location.protocol}//${location.host}`) !== 0;

const loadAnalytics = () => {
	if (!isAnalyticsSessionSet() && hasValidReferrer()) {
		runAnalyticsPageCapture();
	}
};

export default {
	load: loadAnalytics,
};
