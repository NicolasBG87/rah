import React from "react";

const TableBody = ({ data }) => {
  return (
    <tbody className="TableBody">
      {data.map(item => {
        return (
          <tr key={item.id}>
            {Object.values(item).map((td, index) => {
              return <td key={item + "-" + index}>{td}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
