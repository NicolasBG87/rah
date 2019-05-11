import React from "react";
import { Carousel } from "react-responsive-carousel";

import { DATE } from "app/util/helpers";
import InfoPanel from "app/components/InfoPanel";
import Seller from "app/views/Main/Browse/AuctionInfo/Seller";
import Price from "app/views/Main/Browse/AuctionInfo/Price";

const AuctionInfo = ({ auction }) => {
  return (
    <div className="AuctionInfo">
      <h1 className="AuctionInfo__name">
        <p>{auction.name}</p>
        <span className="AuctionInfo__creation-date">
          {DATE.getTimeAgo(auction.createdAt)}
        </span>
      </h1>
      <div className="AuctionInfo__carousel">
        <Carousel emulateTouch showIndicators={false} showThumbs={false}>
          {auction.images.map((image, index) => {
            return <img src={image} alt="Item" key={index} />;
          })}
        </Carousel>
      </div>
      <InfoPanel title="Description">
        <p className="AuctionInfo__description">{auction.description}</p>
      </InfoPanel>
      <InfoPanel title="Seller">
        <Seller auction={auction} />
      </InfoPanel>
      <InfoPanel title="Price">
        <Price auction={auction} />
      </InfoPanel>
      <div className="AuctionInfo__actions">
        <button className="AuctionInfo__actions--bid">Bid</button>
        <button className="AuctionInfo__actions--buyout">Buyout</button>
        <button className="AuctionInfo__actions--watch">Watch</button>
      </div>
    </div>
  );
};

export default AuctionInfo;
