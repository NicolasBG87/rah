import React, { useState, useContext, useEffect } from "react";

import Search from "app/views/Main/Browse/Search";
import SearchResults from "app/views/Main/Browse/SearchResults";

import { APIContext } from "config/api";

const Browse = () => {
  const [auctions, setAuctions] = useState({ count: 0, auctions: [] });
  const [page_no, setPage_no] = useState(1);
  const { fetchAllAuctions } = useContext(APIContext);

  useEffect(() => {
    fetchAllAuctions().then(response => {
      setAuctions(response.data.data);
    });
  }, []);
  return (
    <div className="Browse">
      <div className="Browse__left">
        <Search />
        <SearchResults
          auctions={auctions}
          page_no={page_no}
          setPage_no={setPage_no}
        />
        <p>{auctions.count} auction(s) currently available.</p>
      </div>
      <div className="Browse__right">Right</div>
    </div>
  );
};

export default Browse;
