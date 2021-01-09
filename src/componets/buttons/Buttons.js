import "./buttons.css";

import React from "react";

const Buttons = ({ content, type, onButtonClick }) => {
  return (
    <div
      className={`button ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
};

export default Buttons;
