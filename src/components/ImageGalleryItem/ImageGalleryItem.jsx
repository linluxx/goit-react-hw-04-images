import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <GalleryItem>
      <GalleryImage
        onClick={toggleModal}
        src={data.webformatURL}
        alt={data.tags}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={data.largeImageURL} alt={data.tags} />
        </Modal>
      )}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.object,
};
