import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalContent, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};
Modal.propTypes = {
  onClose: PropTypes.func,
};
