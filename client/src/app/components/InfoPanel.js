import React from "react";

const InfoPanel = ({ children, title }) => {
  return (
    <div className="InfoPanel">
      <h3 className="InfoPanel__title">{title}</h3>
      {children}
    </div>
  );
};

export default InfoPanel;
