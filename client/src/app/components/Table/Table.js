import React, { useState } from "react";

import TableHead from "app/components/Table/TableHead";
import TableBody from "app/components/Table/TableBody";
import TableFoot from "app/components/Table/TableFoot";

const Table = ({ tableData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(tableData);

  const RECORDS_LENGTH = data.length / 10;
  const COLUMNS = Object.keys(tableData[0]);

  const sortTable = value => {
    const sortedData = data.slice().sort((a, b) => {
      return a[value] < b[value] ? -1 : 1;
    });
    setData(sortedData);
    setCurrentPage(1);
  };

  const filterTable = (filterParam, filterValue) => {
    const filteredData = tableData.filter(item => {
      return String(item[filterParam]).includes(filterValue);
    });
    setData(filteredData);
  };

  return (
    <table className="Table">
      <TableHead titles={COLUMNS} sortTable={sortTable} />
      <TableBody
        data={data.filter(
          (item, index) =>
            index + 1 <= currentPage * 10 && index + 1 > currentPage * 10 - 10
        )}
      />
      <TableFoot
        pages={RECORDS_LENGTH}
        columns={COLUMNS}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        filterTable={filterTable}
      />
    </table>
  );
};

export default Table;
