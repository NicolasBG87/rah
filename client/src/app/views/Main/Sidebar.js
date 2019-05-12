import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import MaterialIcon from "material-icons-react";
import ReactTooltip from "react-tooltip";

const Sidebar = ({ user, location }) => {
  const [view, setView] = useState(location.pathname);

  useEffect(() => {
    setView(location.pathname);
  }, [location.pathname]);

  const onDisabledClick = e => {
    e.preventDefault();
  };
  return (
    <aside className="Sidebar">
      <div className="Sidebar--user">
        <NavLink
          to="/browse"
          className="Sidebar__button"
          style={
            view === "/browse" ? { borderRight: "5px solid #ff7a00" } : null
          }
        >
          <MaterialIcon icon="gps_fixed" color="#6fcf97" size={40} />
          <p>Browse</p>
        </NavLink>
        <NavLink
          to="/bids"
          className="Sidebar__button"
          style={view === "/bids" ? { borderRight: "5px solid #ff7a00" } : null}
        >
          <MaterialIcon icon="gavel" color="#6fcf97" size={40} />
          <p>Bids</p>
        </NavLink>
        <NavLink
          to="/auctions"
          className="Sidebar__button"
          style={
            view === "/auctions" ? { borderRight: "5px solid #ff7a00" } : null
          }
        >
          <MaterialIcon icon="assignment" color="#6fcf97" size={40} />
          <p>Auctions</p>
        </NavLink>
        <NavLink
          to="/analytics"
          className="Sidebar__button"
          data-tip
          data-for="Analytics"
          data-delay-show="500"
          onClick={onDisabledClick}
          style={
            view === "/analytics" ? { borderRight: "5px solid #ff7a00" } : null
          }
        >
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
        </NavLink>
      </div>
      <div className="Sidebar--management">
        {user.role !== "user" ? (
          <NavLink
            to="/manage"
            className="Sidebar__button"
            style={
              view === "/manage" ? { borderRight: "5px solid #ff7a00" } : null
            }
          >
            <MaterialIcon icon="settings" color="#eb5757" size={40} />
            <p>Manage</p>
          </NavLink>
        ) : null}
        {user.role === "admin" ? (
          <NavLink
            to="/admin"
            className="Sidebar__button"
            style={
              view === "/admin" ? { borderRight: "5px solid #ff7a00" } : null
            }
          >
            <MaterialIcon icon="brightness_auto" color="#eb5757" size={40} />
            <p>Admin</p>
          </NavLink>
        ) : null}
      </div>
    </aside>
  );
};

export default withRouter(Sidebar);
