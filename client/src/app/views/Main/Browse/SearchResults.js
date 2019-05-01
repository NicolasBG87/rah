import React from "react";

import Pagination from "app/views/Main/Browse/Table/Pagination";
import TableHead from "app/views/Main/Browse/Table/TableHead";

const SearchResults = () => {
  return (
    <table className="SearchResults">
      <Pagination />
      <TableHead />
      <tbody>
        <tr>
          <td className="SearchResults__name">
            <img src={require("assets/img/test.jpg")} alt="Test" />
            <div className="Flex-vertical">
              <p className="Auction__id">#12345</p>
              <p className="Auction__name">Ford Focus 1.8 TDI</p>
            </div>
          </td>
          <td className="SearchResults__seller">
            <p>Testasdasdasdasd Sellerasdasd</p>
          </td>
          <td className="SearchResults__time-left">
            <p>Short</p>
          </td>
          <td className="SearchResults__price">
            <div className="Flex-vertical">
              <p className="SearchResults__bid">
                <span className="SearchResults__bid--property">Bid </span>
                <span className="SearchResults__bid--value">5418.00 $</span>
              </p>
              <p className="SearchResults__buyout">
                <span className="SearchResults__buyout--property">Buyout </span>
                <span className="SearchResults__buyout--value">9999.99 $</span>
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
