import React from "react";

const BottomBar = ({ user }) => {
  return (
    <div className="BottomBar">
      <div className="BottomBar__status">
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Balance: </span>
          <span className="BottomBar__item--value info">
            {(user.balance || 0) + " $"}
          </span>
          <button className="BottomBar__item--button">
            <img
              src={require("assets/img/add-balance.svg")}
              alt="Add Balance"
            />
          </button>
        </div>
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Watching: </span>
          <span className="BottomBar__item--value">
            {(user.auctions.watching || 0) + " auctions"}
          </span>
          <button className="BottomBar__item--button">
            <img src={require("assets/img/eye-filled.svg")} alt="Add Balance" />
          </button>
        </div>
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Pending: </span>
          <span className="BottomBar__item--value">
            {(user.auctions.pending || 0) + " auctions"}
          </span>
          <button className="BottomBar__item--button">
            <img src={require("assets/img/pending.svg")} alt="Add Balance" />
          </button>
        </div>
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Expired: </span>
          <span className="BottomBar__item--value">
            {(user.auctions.expired || 0) + " auctions"}
          </span>
          <button className="BottomBar__item--button">
            <img src={require("assets/img/expired.svg")} alt="Add Balance" />
          </button>
        </div>
      </div>
      <div className="BottomBar__app-info">
        <span>
          Powered by <span className="info">Nix-UI @ Nix MediaⒸ</span>{" "}
          {new Date().getFullYear()}
        </span>
        <span className="App-version">
          Version: {`${process.env.REACT_APP_VERSION}`}
        </span>
      </div>
    </div>
  );
};

export default BottomBar;
