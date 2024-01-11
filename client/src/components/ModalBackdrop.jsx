import React from 'react';
import '../styles/ModalBackdrop.scss';

const ModalBackdrop = ({ onClick }) => (
  <div className="modal-backdrop" onClick={onClick}></div>
);

export default ModalBackdrop;