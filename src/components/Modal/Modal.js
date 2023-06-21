import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, oncloseModal }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        oncloseModal();
      }
    };

    window.addEventListener('keedown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [oncloseModal]);

  const handleDackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      oncloseModal();
    }
  };

  return (
    (
      <Overlay onClick={handleDackdropClick}>
        <ModalWindow>{children}</ModalWindow>
      </Overlay>
    ),
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  oncloseModal: PropTypes.func.isRequired,
};
