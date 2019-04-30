import React from "react";

import * as icon from "app/components/Icons";

const SearchResults = ({ currentPage = 2, pages = 2 }) => {
  const setCurrentPage = () => {
    console.log("setCurrentPage");
  };
  return (
    <table className="SearchResults">
      <thead>
        <tr>
          <td colSpan={4}>
            <div className="Pagination">
              <span
                className="Pagination__control"
                onClick={e => setCurrentPage(1)}
              >
                {icon.arrowDoubleLeft()}
              </span>
              <span
                className="Pagination__control"
                onClick={e => setCurrentPage(currentPage - 1)}
              >
                {icon.arrowLeft()}
              </span>
              <span>
                Page
                <input
                  type="number"
                  value={currentPage}
                  min={0}
                  max={Math.round(pages)}
                  onChange={e =>
                    e.target.value >= 0 && e.target.value < Math.round(pages)
                      ? setCurrentPage(e.target.value)
                      : null
                  }
                />
                of {pages > 1 ? Math.round(pages) : 1}
              </span>
              <span
                className="Pagination__control"
                onClick={e => setCurrentPage(currentPage + 1)}
              >
                {icon.arrowRight()}
              </span>
              <span
                className="Pagination__control"
                onClick={e => setCurrentPage(pages)}
              >
                {icon.arrowDoubleRight()}
              </span>
            </div>
          </td>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Name</th>
          <th>Seller</th>
          <th>Time Left</th>
          <th>Price</th>
        </tr>
      </thead>
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
            <p style={{ color: "#ff7a00" }}>Medium</p>
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
            <p style={{ color: "#6fcf97" }}>Long</p>
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
            <p style={{ color: "#ff7a00" }}>Medium</p>
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
            <p style={{ color: "#6fcf97" }}>Long</p>
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
            <p style={{ color: "#ff7a00" }}>Medium</p>
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
            <p style={{ color: "#6fcf97" }}>Long</p>
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
            <p style={{ color: "#6fcf97" }}>Long</p>
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
