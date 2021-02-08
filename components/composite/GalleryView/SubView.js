import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import styled from 'styled-components';
import { easingFunction, SECONDARY_COLOR, WHITE } from '../../../utils/theme';
import { getFadeInAnimation } from '../../../utils/animation';
import { Flex } from '../../ui';

const SubViewContainer = styled(Flex)`
  width: 260px;
  height: 150px;
  background-color: ${SECONDARY_COLOR};
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  opacity: 0.0;
  animation: ${getFadeInAnimation(1.0)} 0.4s ${easingFunction};
  animation-fill-mode: forwards;
  overflow: hidden;
  position: relative;
  cursor: pointer;
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

const SubView = ({ media, onClick }) => {
  if (!media) return null;

  if (media.isVideo) {
    return (
      <SubViewContainer key={media.src} justify="center" align="center" onClick={onClick} isVideo>
        <PlayButton className="fa fa-play" />
        <Video key={media.src} width="100%" height="100%" autoPlay={false} muted {...media.mediaProps}>
          <source src={media.src} type="video/mp4" />
          <track kind="captions" />
        </Video>
      </SubViewContainer>
    );
  }

  return <SubViewContainer key={media.src} src={media.src} onClick={onClick} />;
};

SubView.displayName = 'SubView';

SubView.propTypes = {
  media: shape({
    src: string.isRequired,
    isVideo: bool.isRequired,
    mediaProps: shape({}),
  }).isRequired,
  onClick: func.isRequired,
};

export default SubView;
