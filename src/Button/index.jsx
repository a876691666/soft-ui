import React, { useState } from "react";

const Button = props => {
  const classList = ["so-button"];
  return (
    <button
      className={classList.join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
