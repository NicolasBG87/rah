import React from "react";

import * as util from "app/util/helpers";

const TableHead = ({ titles, sortTable }) => {
  return (
    <thead className="TableHead">
      <tr>
        {titles.map((item, index) => (
          <th key={index} onClick={e => sortTable(item)}>
            {util.formatHeader(item)} ▾
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
