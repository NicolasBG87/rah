import React from "react";
import MaterialIcon from "material-icons-react";

const BottomBar = ({ user }) => {
  return (
    <div className="BottomBar">
      <div className="BottomBar__status">
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Balance: </span>
          <span className="BottomBar__item--value info">
            {user.balance + " $"}
          </span>
          <button className="BottomBar__item--button">
            <MaterialIcon icon="add_circle" color="#6fcf97" />
          </button>
        </div>
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Watching: </span>
          <span className="BottomBar__item--value">
            {user.auctions.watching + " auctions"}
          </span>
          <button className="BottomBar__item--button">
            <MaterialIcon icon="remove_red_eye" color="#6fcf97" />
          </button>
        </div>
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Pending: </span>
          <span className="BottomBar__item--value">
            {user.auctions.pending + " auctions"}
          </span>
          <button className="BottomBar__item--button">
            <MaterialIcon icon="autorenew" color="#6fcf97" />
          </button>
        </div>
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Expired: </span>
          <span className="BottomBar__item--value">
            {user.auctions.expired + " auctions"}
          </span>
          <button className="BottomBar__item--button">
            <MaterialIcon icon="watch_later" color="#6fcf97" />
          </button>
        </div>
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Archived: </span>
          <span className="BottomBar__item--value">
            {user.auctions.archived + " auctions"}
          </span>
          <button className="BottomBar__item--button">
            <MaterialIcon icon="archive" color="#6fcf97" />
          </button>
        </div>
      </div>
      <div className="BottomBar__app-info">
        <span>
          {new Date().getFullYear()} Powered by{" "}
          <span className="info">Nix-UI @ Nix MediaⒸ</span>
        </span>
        <span className="App-version">
          Version: {`${process.env.REACT_APP_VERSION}`}
        </span>
      </div>
    </div>
  );
};

export default BottomBar;
