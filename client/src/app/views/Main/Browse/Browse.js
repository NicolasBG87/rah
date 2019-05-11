import React, { useState, useContext, useEffect } from "react";

import Search from "app/views/Main/Browse/Search";
import SearchResults from "app/views/Main/Browse/SearchResults";
import AuctionInfo from "app/views/Main/Browse/AuctionInfo/AuctionInfo";

import { APIContext } from "config/api";

const Browse = () => {
  const [auctions, setAuctions] = useState({ count: 0, auctions: [] });
  const [currentAuction, setCurrentAuction] = useState(undefined);
  const [page_no, setPage_no] = useState(1);
  const { fetchAllAuctions, fetchAuction } = useContext(APIContext);

  useEffect(() => {
    fetchAllAuctions({ page_no }).then(response => {
      setAuctions(response.data.data);
    });
  }, [page_no]);

  const showAuctionInfo = id => {
    fetchAuction({ id }).then(response => {
      setCurrentAuction(response.data.data);
    });
  };

  return (
    <div className="Browse">
      <div className="Browse__left">
        <div>
          <Search />
          <SearchResults
            auctions={auctions}
            page_no={page_no}
            setPage_no={setPage_no}
            showAuctionInfo={showAuctionInfo}
          />
        </div>
        <p>{auctions.count} auction(s) currently available.</p>
      </div>
      <div className="Browse__right">
        {currentAuction ? <AuctionInfo auction={currentAuction} /> : null}
      </div>
    </div>
  );
};

export default Browse;
