import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const TableRowOffer = (props) => (
  <tr>
    <td>{props.brand}</td>
    <td>{props.name}</td>
    <td>{props.details}</td>
    <td>{props.coupon}</td>
    <td>{props.image}</td>
    <td>{props.visibility ? "True" : "False"}</td>
    <td>
      <Button variant="outline-success" onClick={props.showModal}>
        Edit
      </Button>
    </td>
  </tr>
);

export default TableRowOffer;