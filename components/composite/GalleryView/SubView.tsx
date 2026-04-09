import styled from "styled-components";
import { getFadeInAnimation } from "../../../utils/animation";
import {
	breakpoints,
	easingFunction,
	SECONDARY_COLOR,
	WHITE,
} from "../../../utils/theme";
import { Flex } from "../../ui";
import type { GalleryMediaItem } from "./types";

const SubViewContainer = styled(Flex)<{ src?: string }>`
  width: 260px;
  height: 150px;
  background-color: ${SECONDARY_COLOR};
  ${(props) => (props.src ? `background-image: url(${props.src})` : "")};
  background-size: cover;
  background-position: center;
  opacity: 0.0;
  animation: ${getFadeInAnimation(1.0)} 0.4s ${easingFunction};
  animation-fill-mode: forwards;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.desktopMedium}) {
    width: 195px;
    height: 125px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 33.333333vw;
    height: 125px;
  }
`;

const Video = styled.video`
  position: relative;
  outline: none;
  object-fit: cover;
`;

const PlayButton = styled.i`
  position: absolute;
  color: ${WHITE};
  font-size: 3rem;
  opacity: 0.75;
  z-index: 1;
`;

type SubViewProps = {
	media: GalleryMediaItem;
	onClick: () => void;
};

const SubView = ({ media, onClick }: SubViewProps) => {
	if (!media) return null;

	if (media.isVideo) {
		return (
			<SubViewContainer
				key={media.src}
				justify="center"
				align="center"
				onClick={onClick}
			>
				<PlayButton className="fa fa-play" />
				<Video
					key={media.src}
					width="100%"
					height="100%"
					autoPlay={false}
					muted
					disableRemotePlayback
					{...media.mediaProps}
				>
					<source src={media.src} type="video/mp4" />
					<track kind="captions" />
				</Video>
			</SubViewContainer>
		);
	}

	return <SubViewContainer key={media.src} src={media.src} onClick={onClick} />;
};

SubView.displayName = "SubView";

export default SubView;
