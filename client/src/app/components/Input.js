import React, { useState } from "react";

const Input = ({ type, name, value, onChange, label, validator }) => {
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(true);

  const onBlur = () => {
    const isValid = validator(value);
    setFocused(false);
    setValid(isValid);
  };

  return (
    <div className={`Input ${!valid && "Input--invalid"}`}>
      <label
        className={`Input__label${value.length || focused ? "--focused" : ""}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="Input__input"
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
        name={name}
      />
    </div>
  );
};

export default Input;
