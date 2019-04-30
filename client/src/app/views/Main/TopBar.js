import React from "react";
import MaterialIcon from "material-icons-react";

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
          <MaterialIcon icon="notifications" color="#e5e0f5" />
          <span className="Indicator" />
        </button>
        <button>
          <MaterialIcon icon="shopping_cart" color="#e5e0f5" />
          <span className="Indicator" />
        </button>
        <button>
          <MaterialIcon icon="help" color="#e5e0f5" />
        </button>
        <button>
          <img className="TopBar__avatar" src={avatar} alt="Avatar" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
