import React, { useState } from "react";

import * as util from "app/util/helpers";
import * as icon from "app/components/Icons";

const TableFoot = ({
  pages,
  columns,
  currentPage,
  setCurrentPage,
  filterTable
}) => {
  const [filterParam, setFilterParam] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const fiterData = value => {
    setFilterValue(value);
    filterTable(filterParam, value);
  };

  return (
    <tfoot>
      <tr>
        <td className="TableFoot__container" colSpan={columns.length + 1}>
          <div className="TableFoot__wrapper">
            <div>
              <label htmlFor="filter">Filter By: </label>
              <select
                name="filter"
                value={filterParam}
                onChange={e => setFilterParam(e.target.value)}
              >
                <option value="" disabled>
                  --Choose a filter--
                </option>
                {columns.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {util.formatHeader(item)}
                    </option>
                  );
                })}
              </select>
              <input
                type="text"
                value={filterValue}
                onChange={e => fiterData(e.target.value)}
              />
            </div>
            <div>
              <span onClick={e => setCurrentPage(1)}>
                {icon.arrowDoubleLeft()}
              </span>
              <span onClick={e => setCurrentPage(currentPage - 1)}>
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
              <span onClick={e => setCurrentPage(currentPage + 1)}>
                {icon.arrowRight()}
              </span>
              <span onClick={e => setCurrentPage(pages)}>
                {icon.arrowDoubleRight()}
              </span>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFoot;
