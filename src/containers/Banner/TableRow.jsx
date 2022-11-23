import React from "react";

const TableRow = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.details}</td>
    <td>{props.coupon}</td>
    <td>{props.image}</td>
    <td>{props.visibility}</td>
    <td>Action</td>
  </tr>
);

export default TableRow;
