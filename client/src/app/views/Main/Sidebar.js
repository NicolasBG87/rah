import React from "react";
import MaterialIcon from "material-icons-react";

import ReactTooltip from "react-tooltip";

const Sidebar = ({ user }) => {
  return (
    <aside className="Sidebar">
      <div className="Sidebar--user">
        <button className="Sidebar__button">
          <MaterialIcon icon="gps_fixed" color="#6fcf97" size={40} />
          <p>Browse</p>
        </button>
        <button className="Sidebar__button">
          <MaterialIcon icon="gavel" color="#6fcf97" size={40} />
          <p>Bids</p>
        </button>
        <button className="Sidebar__button">
          <MaterialIcon icon="assignment" color="#6fcf97" size={40} />
          <p>Auctions</p>
        </button>
        <button className="Sidebar__button" data-tip data-for="Analytics">
          <ReactTooltip
            className="extraClass"
            id="Analytics"
            type="dark"
            effect="solid"
          >
            <span>Not available until RAH Version 2.0</span>
          </ReactTooltip>
          <MaterialIcon icon="assessment" inactive size={40} />
          <p>Analytics</p>
        </button>
      </div>
      <div className="Sidebar--management">
        {user.role !== "user" ? (
          <button className="Sidebar__button">
            <MaterialIcon icon="settings" color="#eb5757" size={40} />
            <p>Manage</p>
          </button>
        ) : null}
        {user.role === "admin" ? (
          <button className="Sidebar__button">
            <MaterialIcon icon="brightness_auto" color="#eb5757" size={40} />
            <p>Admin</p>
          </button>
        ) : null}
      </div>
    </aside>
  );
};

export default Sidebar;
