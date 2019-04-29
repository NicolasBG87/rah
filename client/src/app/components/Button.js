import React from "react";

const Button = ({ label, onClick, large = false }) => {
  return (
    <button className={large ? "ButtonLarge" : "Button"} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
