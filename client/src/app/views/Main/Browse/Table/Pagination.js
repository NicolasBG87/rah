import React from "react";

import * as icon from "app/components/Icons";

const Pagination = ({ currentPage = 2, pages = 2 }) => {
  const setCurrentPage = () => {
    console.log("setCurrentPage");
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
  );
};

export default Pagination;
