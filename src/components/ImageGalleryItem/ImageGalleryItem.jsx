import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

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
// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };
//   toggleModal = () => {
//     this.setState(state => ({ showModal: !state.showModal }));
//   };
//   render() {
//     const { data } = this.props;
//     return (
//       <GalleryItem>
//         <GalleryImage
//           onClick={this.toggleModal}
//           src={data.webformatURL}
//           alt={data.tags}
//         />
//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={data.largeImageURL} alt={data.tags} />
//           </Modal>
//         )}
//       </GalleryItem>
//     );
//   }
// }
