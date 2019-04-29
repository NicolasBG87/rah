import React from "react";

const Select = ({ name, value, onChange, options }) => {
  return (
    <select className="Select" name={name} value={value} onChange={onChange}>
      <option value="default" disabled={true}>
        -- Secret Question --
      </option>
      {options.map((option, index) => {
        return (
          <option value={option} key={index}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
