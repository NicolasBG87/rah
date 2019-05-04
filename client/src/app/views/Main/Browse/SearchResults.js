import React from "react";

import Pagination from "app/views/Main/Browse/Table/Pagination";
import TableHead from "app/views/Main/Browse/Table/TableHead";

const SearchResults = ({ auctions, page_no, setPage_no }) => {
  return (
    <table className="SearchResults">
      <Pagination
        page_no={page_no}
        setPage_no={setPage_no}
        pages={Math.floor(auctions.count / 10 + 1)}
      />
      <TableHead />
      <tbody>
        {auctions && auctions.auctions.length ? (
          auctions.auctions.map((auction, index) => {
            return (
              <tr key={index}>
                <td className="SearchResults__name">
                  <img src={auction.images[0]} alt="Featured" />
                  <div className="Flex-vertical">
                    <p className="Auction__id">#{auction.id}</p>
                    <p className="Auction__name">{auction.name}</p>
                  </div>
                </td>
                <td className="SearchResults__seller">
                  <p>@{auction.owner}</p>
                </td>
                <td className="SearchResults__time-left">
                  <p>{auction.expiresIn}</p>
                </td>
                <td className="SearchResults__price">
                  <div className="Flex-vertical">
                    <p className="SearchResults__bid">
                      <span className="SearchResults__bid--property">Bid </span>
                      <span className="SearchResults__bid--value">
                        {auction.price.bid} $
                      </span>
                    </p>
                    <p className="SearchResults__buyout">
                      <span className="SearchResults__buyout--property">
                        Buyout{" "}
                      </span>
                      <span className="SearchResults__buyout--value">
                        {auction.price.buyout} $
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No auctions found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
