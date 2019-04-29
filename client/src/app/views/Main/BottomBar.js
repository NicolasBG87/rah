import React from "react";

const BottomBar = () => {
  return (
    <div className="BottomBar">
      <div className="BottomBar__status">
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Balance: </span>
          <span className="BottomBar__item--value info">
            {"7859.00" + " $"}
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
          <span className="BottomBar__item--value">{"7" + " auctions"}</span>
          <button className="BottomBar__item--button">
            <img src={require("assets/img/eye-filled.svg")} alt="Add Balance" />
          </button>
        </div>
        <div className="BottomBar__item">
          <span className="BottomBar__item--property">Pending: </span>
          <span className="BottomBar__item--value">{"3" + " auctions"}</span>
          <button className="BottomBar__item--button">
            <img src={require("assets/img/pending.svg")} alt="Add Balance" />
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
