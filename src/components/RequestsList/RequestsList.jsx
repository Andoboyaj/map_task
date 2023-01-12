import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedRequestSelector,
  allRequestsListSelector,
} from "../../redux/requestsList/selectors";

import { getPathDetails } from "../../redux/requestsList/requestsSlice";

import "./styles.scss";

const TABLE_HEADERS = [
  "Номер заявки",
  "Координаты ОТ lat",
  "Координаты ОТ lng",
  "Координаты ДО lat",
  "Координаты ДО lng",
];

export function RequestsList() {
  const selectedRow = useSelector(selectedRequestSelector);
  const tableRows = useSelector(allRequestsListSelector);

  const dispatch = useDispatch();

  const handleSelectRow = (row) => {
    if (row?.requestNumber === selectedRow?.requestNumber) return

    dispatch(getPathDetails(row));
  };

  const renderTableRows = (rows) =>
    rows.map((row) => (
      <tr
        className={
          selectedRow?.requestNumber === row.requestNumber ? "selected" : ""
        }
        key={row.requestNumber}
        onClick={() => handleSelectRow(row)}
      >
        <td>&#8470; {row.requestNumber}</td>
        <td>{row.coordFrom.lat}</td>
        <td>{row.coordFrom.lng}</td>
        <td>{row.coordTarget.lat}</td>
        <td>{row.coordTarget.lng}</td>
      </tr>
    ));

  return (
    <table className="requests-table">
      <thead>
        <tr>
          {TABLE_HEADERS.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{renderTableRows(tableRows)}</tbody>
    </table>
  );
}
