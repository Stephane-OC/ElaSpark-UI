import React from "react";
import "./Button.css";
import "./buttonAnimations.css";

const Button = ({
  children,
  size = "b-m",
  styleType = "btn-1",
  animation,
  borderStyle,
  onClick,
  className = "",
}) => {
  
  const buttonClass = `button ${size} ${styleType} ${animation || ""} ${borderStyle || ""} ${className}`.trim();

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;