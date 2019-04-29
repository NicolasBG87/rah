import React from "react";

const TopBar = ({ user, logout }) => {
  const avatar =
    user.avatar === "placeholder"
      ? require("assets/img/avatar.svg")
      : user.avatar;

  return (
    <div className="TopBar">
      <img
        className="TopBar__logo"
        src={require("assets/img/logo.svg")}
        alt="Logo"
      />
      <div className="TopBar__actions">
        <button onClick={logout}>Logout</button>
        <button>
          <img
            src={require("assets/img/notifications.svg")}
            alt="Notifications"
          />
          <span className="Indicator" />
        </button>
        <button>
          <img src={require("assets/img/cart.svg")} alt="Cart" />
          <span className="Indicator" />
        </button>
        <button>
          <img src={require("assets/img/support.svg")} alt="Support" />
        </button>
        <button>
          <img className="TopBar__avatar" src={avatar} alt="Avatar" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
