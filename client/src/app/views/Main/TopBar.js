import React from "react";
import MaterialIcon from "material-icons-react";

import ReactTooltip from "react-tooltip";

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
        <button data-tip data-for="Notifications" data-delay-show="500">
          <ReactTooltip
            className="extraClass"
            id="Notifications"
            type="dark"
            effect="solid"
            place="bottom"
          >
            <span>Notifications</span>
          </ReactTooltip>
          <MaterialIcon icon="notifications" color="#e5e0f5" />
          <span className="Indicator" />
        </button>
        <button data-tip data-for="Claim" data-delay-show="500">
          <ReactTooltip
            className="extraClass"
            id="Claim"
            type="dark"
            effect="solid"
            place="bottom"
          >
            <span>Claim items</span>
          </ReactTooltip>
          <MaterialIcon icon="shopping_cart" color="#e5e0f5" />
          <span className="Indicator" />
        </button>
        <button data-tip data-for="Support" data-delay-show="500">
          <ReactTooltip
            className="extraClass"
            id="Support"
            type="dark"
            effect="solid"
            place="bottom"
          >
            <span>Get help</span>
          </ReactTooltip>
          <MaterialIcon icon="help" color="#e5e0f5" />
        </button>
        <button data-tip data-for="Profile" data-delay-show="500">
          <ReactTooltip
            className="extraClass"
            id="Profile"
            type="dark"
            effect="solid"
            place="bottom"
          >
            <span>Profile</span>
          </ReactTooltip>
          <img className="TopBar__avatar" src={avatar} alt="Avatar" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
