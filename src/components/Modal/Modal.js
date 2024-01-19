import React from "react";
import "./Modal.css";
import "./modalsAnimations.css";

const Modal = ({
  size = "m",
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
  children,
  alignTitle = "left",
  alignParagraph = "left",
}) => {
  
  // Classes CSS dynamiques
  const modalSizeClass = `modal-${size}`;
  const modalStyleClass = `modal-${styleType}`;
  const centerClass = centered ? "m-center" : "";
  const animationClass = animation ? animation : "";
  const modalBackdropClass = `modal-container modal-backdrop-${backdropStyle}`;

  // Classes pour le titre et le paragraphe
  const titleClass = title
    ? `modal-title t-${title.size || "1"} ${title.align || alignTitle}`
    : "";
  const paragraphClass = paragraph
    ? `modal-paragraph p-${paragraph.size || "1"} ${
        paragraph.align || alignParagraph
      }`
    : "";
  const headerClass = logoSrc ? "modal-header" : "modal-header no-logo";

  return (
    <div className={modalBackdropClass} aria-hidden="true">
      <div
        className={`modal ${modalSizeClass} ${modalStyleClass} ${centerClass} ${animationClass} ${className} ${borderRadius}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
      >
        <div className={headerClass}>
          {logoSrc && <img src={logoSrc} className="modal-logo" alt="Logo" />}
          {title && <div className={titleClass}>{title.text}</div>}
        </div>
        <div className="modal-content">
          {paragraph && <p className={paragraphClass}>{paragraph.text}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
