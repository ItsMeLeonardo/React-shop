import React from "react";
import "@styles/Buttons.scss";

export default function Button({ onClick, children, type }) {
  const customStyles = {
    small: "sm-square",
  };

  return (
    <button type="button" className={customStyles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
