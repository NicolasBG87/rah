import React, { useState } from "react";

const initialFormData = {
  term: "",
  bid_from: 0,
  bid_to: 0,
  buyout_from: 0,
  buyout_to: 0
};

const Search = () => {
  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = e => {
    e.preventDefault();
    // send auctions search query
    console.log("Search form submitted!");
  };

  const onInputChange = e => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form onSubmit={onSubmit} className="Search">
      <div className="Flex-vertical">
        <label htmlFor="term">Name</label>
        <input
          className="Search__term"
          name="term"
          type="text"
          placeholder="Enter the search term..."
          value={formData.term}
          onChange={onInputChange}
        />
      </div>
      <div className="Flex-vertical">
        <span className="Search__range-label">Bid Range $</span>
        <div>
          <input
            className="Search__range"
            name="bid_from"
            type="number"
            value={formData.bid_from}
            onChange={onInputChange}
          />
          <input
            className="Search__range"
            name="bid_to"
            type="number"
            value={formData.bid_to}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="Flex-vertical">
        <span className="Search__range-label">Buyout Range $</span>
        <div>
          <input
            className="Search__range"
            name="buyout_from"
            type="number"
            value={formData.buyout_from}
            onChange={onInputChange}
          />
          <input
            className="Search__range"
            name="buyout_to"
            type="number"
            value={formData.buyout_to}
            onChange={onInputChange}
          />
        </div>
      </div>
      <button className="Search__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
