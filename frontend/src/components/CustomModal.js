import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1E1E1E',
    borderRadius: '15px',
    color: '#ffff',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(30, 30, 30, 0.75)', 
  },
};

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Custom Modal"
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
