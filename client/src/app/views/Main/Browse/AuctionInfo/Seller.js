import React from "react";
import MaterialIcon from "material-icons-react";
import ReactTooltip from "react-tooltip";
import Rating from "react-rating";

import { DATE } from "app/util/helpers";

const Seller = ({ auction }) => {
  return (
    <div className="Seller">
      <div className="Seller__body">
        <div className="Seller__info">
          <img
            src={auction.owner.avatar}
            alt="Avatar"
            className="Seller__avatar"
          />
          <div className="Flex-vertical">
            <p>
              {auction.owner.first_name} {auction.owner.last_name}
            </p>
            <p>@{auction.owner.username}</p>
            <p>Member since {DATE.formatDate(auction.owner.registerDate)}</p>
          </div>
        </div>
        <div className="Seller__actions">
          <div data-tip data-for="Approve" data-delay-show="500">
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
      <div className="Seller__footer">
        <p>Items sold: 763</p>
        <p>
          Rating:{" "}
          <Rating
            emptySymbol={<MaterialIcon icon="star_rate" color="#323350" />}
            fullSymbol={<MaterialIcon icon="star_rate" color="#ff7a00" />}
            placeholderSymbol={
              <MaterialIcon icon="star_rate" color="#ff7a00" />
            }
            placeholderRating={3.5}
            readonly={true}
          />
        </p>
      </div>
    </div>
  );
};

export default Seller;
