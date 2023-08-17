import React from 'react';
import './popup.css';
const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
      <button className="close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
