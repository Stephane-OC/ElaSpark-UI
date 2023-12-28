import React from 'react';
import '../styles/button.css';

const Button = ({ children, onClick, animation, styleType }) => {
  
  return <button className={`button ${animation} ${styleType}`} onClick={onClick}>{children}</button>;
};

export default Button;