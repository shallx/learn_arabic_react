import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const TableRowBanner = (props) => (
  <tr>
    <td>{props.coupon}</td>
    <td>{props.image}</td>
    <td>{props.background_responsive}</td>
    <td>{props.visibility ? "True" : "False"}</td>
    <td>
      <Button variant="outline-success" onClick={props.showModal}>
        Edit
      </Button>
    </td>
  </tr>
);

export default TableRowBanner;
