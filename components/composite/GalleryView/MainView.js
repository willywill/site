import React from 'react';
import { bool, shape, string } from 'prop-types';
import styled from 'styled-components';
import { breakpoints, easingFunction, SECONDARY_COLOR } from '../../../utils/theme';
import { Flex } from '../../ui';
import { getFadeInAnimation } from '../../../utils/animation';

const MainViewContainer = styled(Flex)`
  width: 800px;
  height: 500px;
  background-color: ${SECONDARY_COLOR};
  ${(props) => (props.src ? `background-image: url(${props.src})` : '')};
  background-size: cover;
  background-position: center;
  opacity: 0.0;
  animation: ${getFadeInAnimation(1.0)} 0.4s ${easingFunction};
  animation-fill-mode: forwards;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.desktopMedium}) {
    width: 600px;
    height: 300px;
  }

  @media screen and (max-width: ${breakpoints.desktopSmall}) {
    width: 600px;
    height: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 350px;
  }
`;

const Video = styled.video`
  position: relative;
  outline: none;
  object-fit: cover;
`;

const MainView = ({ media }) => {
  if (!media) return null;

  if (media.isVideo) {
    return (
      <MainViewContainer key={media.src} justify="center" align="center" isVideo>
        <Video key={media.src} width="100%" height="100%" loop autoPlay muted {...media.mediaProps}>
          <source src={media.src} type="video/mp4" />
          <track kind="captions" />
        </Video>
      </MainViewContainer>
    );
  }

  return <MainViewContainer key={media.src} src={media.src} />;
};

MainView.displayName = 'MainView';

MainView.propTypes = {
  media: shape({
    src: string.isRequired,
    isVideo: bool.isRequired,
    mediaProps: shape({}),
  }).isRequired,
};

MainView.defaultProps = {

};

export default MainView;
