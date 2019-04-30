import React from "react";

import Search from "app/views/Main/Browse/Search";
import SearchResults from "app/views/Main/Browse/SearchResults";

const Browse = () => {
  return (
    <div className="Browse">
      <div className="Browse__left">
        <Search />
        <SearchResults />
        <p>Total number of 26451 auctions currently available.</p>
      </div>
      <div className="Browse__right">Right</div>
    </div>
  );
};

export default Browse;
