import React from "react";
import closeIcon from "../../assets/img/close.svg";
import "./Button.css";
import "./buttonAnimations.css";

const Button = ({
  children,
  size = "b-m",
  styleType = "btn-1",
  animation,
  borderStyle,
  align,
  ariaLabel,
  ariaPressed,
  ariaDisabled,
  ariaExpanded,
  ariaHaspopup,
  ariaControls,
  closeButtonStyleType = "btn-1",
  closeButtonAnimation,
  closeButtonBorderStyle,
  isCloseButton = false,
  role = "button",
  tabIndex = 0,
  onClick,
  className = "",
}) => {
  const alignmentClass =
    align === "left"
      ? "button-align-left"
      : align === "right"
      ? "button-align-right"
      : "";

  let buttonClass = `button ${alignmentClass} ${size} ${styleType} ${
    animation || ""
  } ${borderStyle || ""} ${className}`;

  if (isCloseButton) {
    buttonClass += ` modal-close-btn ${closeButtonStyleType || ""} ${
      closeButtonAnimation || ""
    } ${closeButtonBorderStyle || ""}`;
  }

  return (
    <button
      className={buttonClass.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-disabled={ariaDisabled}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      aria-controls={ariaControls}
      role={role}
      tabIndex={tabIndex}
    >
      {isCloseButton ? <img src={closeIcon} alt="Close" /> : children}
    </button>
  );
};

// ButtonContainer component
const ButtonContainer = ({ align, children }) => {
  const containerClass = `b-container ${
    align === "right"
      ? "b-r"
      : align === "center"
      ? "b-c"
      : align === "left"
      ? "b-l"
      : "b-auto"
  }`;

  return <div className={containerClass}>{children}</div>;
};

export { Button, ButtonContainer };