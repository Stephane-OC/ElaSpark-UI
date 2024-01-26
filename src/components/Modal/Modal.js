import React from "react";
import { Button } from "../Button/Button";
import closeIcon from "../../assets/img/close.svg";
import "./Modal.css";
import "./modalsAnimations.css";

const Modal = ({
  size = "m-s",
  backdropStyle = "dark",
  centered = false,
  styleType = "1",
  animation,
  className = "",
  borderRadius = "br-md",
  title,
  paragraph,
  logoSrc,
  ariaLabelledBy,
  showCloseButton = true,
  closeAlign = "right",
  closeButtonStyleType = "btn-1",
  closeButtonAnimation,
  closeButtonBorderStyle,
  onClose = () => {},
  children,
  alignTitle = "left",
  alignParagraph = "left",
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const setFocus = (node) => {
    if (node) {
      const focusableElements = node.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length) focusableElements[0].focus();
    }
  }; 

  const modalSizeClass = size;
  const modalStyleClass = `modal-${styleType}`;
  const centerClass = centered ? "m-center" : "";
  const animationClass = animation ? animation : "";
  const modalBackdropClass = `modal-container modal-backdrop-${backdropStyle}`;
  const headerClass = logoSrc ? "modal-header" : "modal-header no-logo";

  const titleClass = title
    ? `modal-title t-${title.size || "1"} ${title.align || alignTitle}`
    : "";
  const paragraphClass = paragraph
    ? `modal-paragraph p-${paragraph.size || "1"} ${
        paragraph.align || alignParagraph
      }`
    : "";
  const closeButtonContainerClass = `modal-close-button-container ${
    closeAlign === "left"
      ? "align-left"
      : closeAlign === "center"
      ? "align-center"
      : "align-right"
  }`;

  return (
    <div
      className={modalBackdropClass}
      aria-hidden="true"
      onKeyDown={handleKeyDown}
    >
      <div
        className={`modal ${modalSizeClass} ${modalStyleClass} ${centerClass} ${animationClass} ${className} ${borderRadius}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        ref={setFocus}
      >
        <div className={headerClass}>
          {logoSrc && <img src={logoSrc} className="modal-logo" alt="Logo" />}
          {title && <div className={titleClass}>{title.text}</div>}
        </div>
        <div className="modal-content">
          {showCloseButton && (
            <div className={closeButtonContainerClass}>
              <Button
                isCloseButton
                onClick={onClose}
                size="close"
                styleType={closeButtonStyleType}
                animation={closeButtonAnimation}
                borderStyle={closeButtonBorderStyle}
                className="modal-close-btn"
              >
                <img src={closeIcon} alt="Close" />
              </Button>
            </div>
          )}
          {paragraph && <p className={paragraphClass}>{paragraph.text}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
