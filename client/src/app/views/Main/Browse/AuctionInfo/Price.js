import React from "react";

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
            {auction.price.bid + Math.round(auction.price.bid * 0.01)} $
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
