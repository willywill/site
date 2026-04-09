import filter from "lodash/fp/filter";
import reject from "lodash/fp/reject";
import { useState } from "react";
import GalleryView from "./GalleryView";
import type { GalleryMediaItem } from "./types";

type GalleryViewContainerProps = {
	title: string;
	description: string;
	gallery: GalleryMediaItem[];
	flip?: boolean;
};

const GalleryViewContainer = ({
	title,
	description,
	gallery,
	flip = false,
}: GalleryViewContainerProps) => {
	const [media, setMedia] = useState(gallery);

	const [mainMedia] = filter("isMain", media) as GalleryMediaItem[];
	const rest = reject("isMain", media) as GalleryMediaItem[];
	const media1 = rest[0];
	const media2 = rest[1];
	const media3 = rest[2];

	const handleClick = (orderId: number) => {
		const prevMainMedia = { ...mainMedia, isMain: false };
		if (orderId === 1) {
			setMedia([{ ...media1, isMain: true }, prevMainMedia, media2, media3]);
		}

		if (orderId === 2) {
			setMedia([{ ...media2, isMain: true }, media1, prevMainMedia, media3]);
		}

		if (orderId === 3) {
			setMedia([{ ...media3, isMain: true }, media1, media2, prevMainMedia]);
		}
	};

	return (
		<GalleryView
			title={title}
			description={description}
			flip={flip}
			onClick={handleClick}
			media={[mainMedia, media1, media2, media3]}
		/>
	);
};

GalleryViewContainer.displayName = "GalleryViewContainer";

export default GalleryViewContainer;
