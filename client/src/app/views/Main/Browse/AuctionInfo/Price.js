import React from "react";

import { AUCTION } from "app/util/helpers";

const Price = ({ auction }) => {
  return (
    <>
      <div className="Price">
        <p>
          Highest bid: <span className="info">{auction.price.bid} $</span>
        </p>
        <p>
          The next bid value for this auction:{" "}
          <span className="danger">
            {AUCTION.calculateNextBid(auction.price.bid)} $
          </span>
        </p>
        <p>
          Buyout price:{" "}
          <span className="success">{auction.price.buyout} $</span>
        </p>
      </div>
    </>
  );
};

export default Price;
