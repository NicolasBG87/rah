import React, { useContext } from "react";
import MaterialIcon from "material-icons-react";

import { TooltipContext } from "app/components/Tooltip";

const Sidebar = ({ user }) => {
  const { useTooltip, closeTooltip } = useContext(TooltipContext);

  const onAnalyticsMouseEnter = e => {
    const { offsetLeft, offsetTop } = e.target;
    const location = { left: offsetLeft, top: offsetTop + 20 };
    const content = "Not available until RAH Version 2.0";
    useTooltip(content, location);
  };
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
        <button
          className="Sidebar__button"
          onMouseLeave={closeTooltip}
          onMouseEnter={onAnalyticsMouseEnter}
        >
          <MaterialIcon icon="assessment" inactive size={40} />
          <p>Analytics</p>
        </button>
      </div>
      <div className="Sidebar--management">
        {user.role !== "user" ? (
          <button className="Sidebar__button">
            <MaterialIcon icon="settings" color="#6fcf97" size={40} />
            <p>Manage</p>
          </button>
        ) : null}
        {user.role === "admin" ? (
          <button className="Sidebar__button">
            <MaterialIcon icon="brightness_auto" color="#6fcf97" size={40} />
            <p>Admin</p>
          </button>
        ) : null}
      </div>
    </aside>
  );
};

export default Sidebar;
