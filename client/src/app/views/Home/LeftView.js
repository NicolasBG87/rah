import React from "react";

const LeftView = () => {
  return (
    <div className="Home__left">
      <img
        src={require("assets/img/logo.svg")}
        alt="Logo"
        className="Home__left--logo"
      />
      <h1 className="Home__left--title">RAH</h1>
      <h2 className="Home__left--branding">Remote Auction House</h2>
      <h4 className="Home__left--powered">
        Powered by <span>NixMedia© React Library</span>
      </h4>
      <img
        src={require("assets/img/rocket.png")}
        alt="Art"
        className="Home__left--art"
      />
    </div>
  );
};

export default LeftView;
