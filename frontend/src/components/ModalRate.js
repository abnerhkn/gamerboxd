import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalRate = ({ isOpen = false, onRequestClose = () => {}, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
        {children}
    </Modal>
  );
};

export default ModalRate;
