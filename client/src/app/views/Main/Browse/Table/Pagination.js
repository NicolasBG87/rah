import React from "react";

import * as icon from "app/components/Icons";

const Pagination = ({ page_no = 1, pages, setPage_no }) => {
  const setPrevious = () => {
    if (page_no > 1) {
      setCurrentPage(page_no - 1);
    }
  };

  const setNext = () => {
    if (page_no < pages) {
      setCurrentPage(page_no + 1);
    }
  };

  const setCurrentPage = page => {
    setPage_no(page);
  };

  return (
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
            <span className="Pagination__control" onClick={setPrevious}>
              {icon.arrowLeft()}
            </span>
            <span>
              Page
              <input
                type="number"
                value={page_no}
                min={1}
                max={pages}
                readOnly
              />
              of {pages > 1 ? pages : 1}
            </span>
            <span className="Pagination__control" onClick={setNext}>
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
  );
};

export default Pagination;
