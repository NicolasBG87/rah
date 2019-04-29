import React from "react";

const Checkbox = ({ name, checked, onChange, label }) => {
  return (
    <div className="Checkbox-wrapper" onClick={onChange}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="Checkbox"
      />
      <label htmlFor={name} className="Label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
