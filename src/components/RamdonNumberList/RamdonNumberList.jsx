import React from "react";
import "./styles.css";

const RamdonNumberList = ({ data }) => {
  return (
    <aside>
      <table className="table-container">
        <th>Resultado</th>
        <th>Fecha</th>
        {data.map((number, i) => {
          let createdAt = new Date(number.date);
          return i !== 0 ? (
            <tr key={number.id} className="each-number">
              <td className="ramdon-number-list">{number.ramdonNumber}</td>
              <td className="created-at-list">
                {createdAt.toLocaleDateString()}
              </td>
            </tr>
          ) : null;
        })}
      </table>
    </aside>
  );
};

export default RamdonNumberList;
