import type { VideoHTMLAttributes } from "react";

export type GalleryMediaItem = {
	src: string;
	isVideo: boolean;
	isMain: boolean;
	mediaProps?: VideoHTMLAttributes<HTMLVideoElement>;
};
