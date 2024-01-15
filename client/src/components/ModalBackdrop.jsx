import React from 'react';
import '../styles/ModalBackdrop.scss';

const ModalBackdrop = ({ closeHowToPlayModal }) => (
  <div className="modal-backdrop" onClick={closeHowToPlayModal}></div>
);

export default ModalBackdrop;