import React from 'react';
import '../styles/modal.css'; 

const Modal = ({ children, animation, background, size }) => {
  
  return <div className={`modal ${animation} ${background} ${size}`}>{children}</div>;
};

export default Modal;