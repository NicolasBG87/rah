import React from "react";
import MaterialIcon from "material-icons-react";
import ReactTooltip from "react-tooltip";

import InfoPanel from "app/components/InfoPanel";

import { DATE } from "app/util/helpers";

const AuctionInfo = ({ auction }) => {
  return (
    <div className="AuctionInfo">
      <h1 className="AuctionInfo__name">
        {auction.name} -{" "}
        <span className="AuctionInfo__creation-date">
          {DATE.getTimeAgo(auction.createdAt)}
        </span>
      </h1>
      <div className="AuctionInfo__carousel">Carousel...</div>
      <InfoPanel title="Description">
        <p className="AuctionInfo__description">{auction.description}</p>
      </InfoPanel>
      <InfoPanel title="Seller">
        <div className="AuctionInfo__seller">
          <div className="AuctionInfo__seller__body">
            <img
              src={auction.owner.avatar}
              alt="Avatar"
              className="AuctionInfo__seller__avatar"
            />
            <div className="Flex-vertical">
              <p>
                {auction.owner.first_name} {auction.owner.last_name}
              </p>
              <p>@{auction.owner.username}</p>
            </div>
            <div className="Flex-vertical">
              <p>Items sold: 763</p>
              <p>Success rate: 86%</p>
              <p>Member since {DATE.formatDate(auction.owner.registerDate)}</p>
            </div>
          </div>
          <div className="AuctionInfo__seller__footer">
            <div
              className="AuctionInfo__seller__footer--item"
              data-tip
              data-for="Approve"
              data-delay-show="500"
            >
              <ReactTooltip
                className="extraClass"
                id="Approve"
                type="dark"
                effect="solid"
              >
                <span>Approve the seller if you're satisfied.</span>
              </ReactTooltip>
              <MaterialIcon icon="thumb_up" color="#6fcf97" />
            </div>
            <div
              className="AuctionInfo__seller__footer--item"
              data-tip
              data-for="Flag"
              data-delay-show="500"
              data-multiline={true}
            >
              <ReactTooltip
                className="extraClass"
                id="Flag"
                type="dark"
                effect="solid"
              >
                <span>
                  Flag the seller if you think the auction is inappropriate or
                  <br />
                  violates the terms of usage.
                </span>
              </ReactTooltip>
              <MaterialIcon icon="flag" color="#eb5757" />
            </div>
          </div>
        </div>
      </InfoPanel>

      <div className="AuctionInfo__actions">
        <div className="AuctionInfo__bid">
          <p>Highest bid: {auction.price.bid}$</p>
          <button className="AuctionInfo__bid--btn">Bid</button>
          <p>
            The next bid value for this auction is{" "}
            {auction.price.bid + Math.round(auction.price.bid * 0.01)}$
          </p>
        </div>
        <div className="AuctionInfo__buyout">
          <p>Buyout price: {auction.price.buyout}$</p>
          <button className="AuctionInfo__buyout--btn">Buyout</button>
        </div>
      </div>
    </div>
  );
};

export default AuctionInfo;
