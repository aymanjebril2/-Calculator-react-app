import "./buttons.css";

import React from "react";

const Buttons = ({ content, type }) => {
  return (
    <div className={`button ${content === "0" ? "zero" : ""} ${type || ""}`}>
      {content}{" "}
    </div>
  );
};

export default Buttons;
