import PropTypes from 'prop-types';
import { useEffect } from 'react';

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
    <div onClick={handleDackdropClick}>
      <div>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  oncloseModal: PropTypes.func,
};
