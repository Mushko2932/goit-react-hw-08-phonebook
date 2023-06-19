import PropTypes from 'prop-types';
import { useEffect } from 'react';

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
      <div onClick={handleDackdropClick}>
        <div>{children}</div>
      </div>
    ),
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  oncloseModal: PropTypes.func.isRequired,
};
