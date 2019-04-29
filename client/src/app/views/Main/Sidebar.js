import React from "react";

const Sidebar = ({ user }) => {
  return (
    <aside className="Sidebar">
      <div className="Sidebar--user">
        <button className="Sidebar__button">
          <img src={require("assets/img/browse.svg")} alt="Browse" /> Browse
        </button>
        <button className="Sidebar__button">
          <img src={require("assets/img/bids.svg")} alt="Bids" />
          Bids
        </button>
        <button className="Sidebar__button">
          <img src={require("assets/img/auctions.svg")} alt="Auctions" />
          Auctions
        </button>
        <button className="Sidebar__button">
          <img src={require("assets/img/analytics.svg")} alt="Analytics" />
          Analytics
        </button>
      </div>
      <div className="Sidebar--management">
        {user.role !== "user" ? (
          <button className="Sidebar__button">
            <img src={require("assets/img/management.svg")} alt="Manage" />{" "}
            Manage
          </button>
        ) : null}
        {user.role === "admin" ? (
          <button className="Sidebar__button">
            <img src={require("assets/img/admin.svg")} alt="Admin" /> Admin
          </button>
        ) : null}
      </div>
    </aside>
  );
};

export default Sidebar;
