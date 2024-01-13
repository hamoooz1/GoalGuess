import React from 'react';
import '../styles/ModalBackdrop.scss';

const WinLossBackdrop = ({ onClick }) => (
  <div className="modal-backdrop" onClick={onClick}></div>
);

export default WinLossBackdrop;