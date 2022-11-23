import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useViewModel from "./ViewModel";

import { Container,Table } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import TableRow from "./TableRow";

function BannerView(props) {
  const { getData } = useViewModel();
  const [data, setData ] = useState(null);

  useEffect(() => {
    getData().then((res) => {
        setData(res);
    });
  }, []);

  let row = (<th scope="row" colspan="5">
    Loading...
    </th>);
  if(data != null){
    row = data.map((item) => (
    <TableRow
        name={item.offer_name}
        details={item.offer_details}
        coupon={item.coupon_code}
        image={item.background_image}
        visibility={item.visibility}
    ></TableRow>
    ));
  }

  return (
    <Container>
      <h1>Banner View</h1>
      <div class="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Coupon</th>
              <th>Background Image</th>
              <th>Visibility</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default BannerView;
