import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

const initialFormData = {
  term: "",
  from: 0,
  to: 0,
  time_left: "medium"
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
        <span className="Search__range-label">Price Range $</span>
        <div>
          <input
            className="Search__range"
            name="from"
            type="number"
            value={formData.from}
            onChange={onInputChange}
          />
          <input
            className="Search__range"
            name="to"
            type="number"
            value={formData.to}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="Flex-vertical">
        <label className="Search__timeleft-label" htmlFor="time_left">
          Time Left
        </label>
        <select
          className="Search__timeleft"
          name="time_left"
          value={formData.time_left}
          onChange={onInputChange}
          data-tip
          data-for="TimeLeft"
          data-delay-show="500"
          data-multiline={true}
        >
          <option value="short">Short</option>
          <option>Medium</option>
          <option value="long">Long</option>
        </select>
        <ReactTooltip
          className="extraClass"
          id="TimeLeft"
          type="dark"
          effect="solid"
          place="right"
        >
          <span>Short: Less than 1 day left</span>
          <br />
          <span>Medium: Between 1 and 3 days left</span>
          <br />
          <span>Long: Between 3 and 7 days left</span>
        </ReactTooltip>
      </div>
      <button className="Search__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
