import React from "react";
import MaterialIcon from "material-icons-react";
import ReactTooltip from "react-tooltip";

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
        <div
          className="BottomBar__item"
          data-tip
          data-for="Pending"
          data-delay-show="500"
        >
          <ReactTooltip
            className="extraClass"
            id="Pending"
            type="dark"
            effect="solid"
          >
            <span>Your auction(s) with active bid(s).</span>
          </ReactTooltip>
          <span className="BottomBar__item--property">Pending: </span>
          <span className="BottomBar__item--value">
            {user.auctions.pending}
          </span>
          <button className="BottomBar__item--button">
            <MaterialIcon icon="autorenew" color="#6fcf97" />
          </button>
        </div>
        <div
          className="BottomBar__item"
          data-tip
          data-for="Expired"
          data-delay-show="500"
        >
          <ReactTooltip
            className="extraClass"
            id="Expired"
            type="dark"
            effect="solid"
          >
            <span>
              You can renew or archive expired auctions within 48 hours after
              expiring.
            </span>
          </ReactTooltip>
          <span className="BottomBar__item--property">Expired: </span>
          <span className="BottomBar__item--value">
            {user.auctions.expired}
          </span>
          <button className="BottomBar__item--button">
            <MaterialIcon icon="watch_later" color="#6fcf97" />
          </button>
        </div>
        <div
          className="BottomBar__item"
          data-tip
          data-for="Watching"
          data-delay-show="500"
        >
          <ReactTooltip
            className="extraClass"
            id="Watching"
            type="dark"
            effect="solid"
          >
            <span>You will receive notifications for watched auctions.</span>
          </ReactTooltip>
          <span className="BottomBar__item--property">Watching: </span>
          <span className="BottomBar__item--value">
            {user.auctions.watching}
          </span>
          <button className="BottomBar__item--button">
            <MaterialIcon icon="remove_red_eye" color="#6fcf97" />
          </button>
        </div>
        <div
          className="BottomBar__item"
          data-tip
          data-for="Archived"
          data-delay-show="500"
        >
          <ReactTooltip
            className="extraClass"
            id="Archived"
            type="dark"
            effect="solid"
          >
            <span>
              Archived auction(s) can be reactivated at any given time.
            </span>
          </ReactTooltip>
          <span className="BottomBar__item--property">Archived: </span>
          <span className="BottomBar__item--value">
            {user.auctions.archived}
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
