import React, { useState } from 'react';
import filter from 'lodash/fp/filter';
import reject from 'lodash/fp/reject';
import { arrayOf, bool, shape, string } from 'prop-types';
import GalleryView from './GalleryView';

const GalleryViewContainer = ({ title, description, gallery, flip }) => {
  const [media, setMedia] = useState(gallery);

  const [mainMedia] = filter('isMain', media);
  const [media1, media2, media3] = reject('isMain', media);

  const handleClick = (orderId) => {
    // Overwrite the current media flag, set it to false
    const prevMainMedia = { ...mainMedia, isMain: false };
    // Update the order and properties of the media according to the slot it came from
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
      media={[
        mainMedia,
        media1,
        media2,
        media3,
      ]}
    />
  );
};

GalleryViewContainer.displayName = 'GalleryViewContainer';

GalleryViewContainer.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  gallery: arrayOf(shape({
    src: string.isRequired,
    isVideo: bool.isRequired,
    isMain: bool.isRequired,
    mediaProps: shape({}),
  })).isRequired,
  flip: bool, // Do we render the media on the right side? Default is left
};

GalleryViewContainer.defaultProps = {
  flip: false,
};

export default GalleryViewContainer;
