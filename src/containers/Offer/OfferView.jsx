import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useViewModel from "./OfferViewModel";
import { FallingLines } from "react-loader-spinner";

import { Table } from "react-bootstrap";
import { useEffect,useState } from "react";
import TableRow from "./TableRow";
import EditBannerModal from "./Edit/EditOfferModal";
import { useSelector } from "react-redux";
import { getCol } from "../../redux/brand/brandSlice";

function OfferView(props) {
  const { getData, updateData } = useViewModel();
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBrandBanner, setSelectedBrandBanner] = useState({});

  const { selectedIndex } = useSelector((state) => state.brand);
  const dbCol = useSelector(getCol)

  useEffect(() => {
    setData(null);
    getData(dbCol, selectedIndex).then((res) => {
      console.log(`Getting data for ${selectedIndex}`);
      setData(res);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = (item) => {
    console.log(item);
    setSelectedBrandBanner(item);
    setShowModal(true);
  };

  let row = (
    <tr>
      <td colSpan="7"></td>
    </tr>
  );
  if (data != null) {
    row = data.map((item) => (
      <TableRow
        key={item.id}
        brand={item.brand}
        name={item.offer_name}
        details={item.offer_details}
        coupon={item.coupon_code}
        image={item.background_image}
        visibility={item.visibility}
        showModal={() => handleShowModal(item)}
      ></TableRow>
    ));
  }

  return data != null ? (
    <>
      <EditBannerModal
        show={showModal}
        handleClose={handleCloseModal}
        data={selectedBrandBanner}
        onUpdateData={(updatedData) => updateData(updatedData, data, setData)}
      ></EditBannerModal>
      <h1 className="text-center p3">Offer View</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Title</th>
              <th>Details</th>
              <th>Coupon</th>
              <th>Background Image</th>
              <th>Visibility</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </Table>
    </>
  ) : (
    <div className="d-flex justify-content-center">
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
        className="m-auto"
      />
      </div>
  );
}

export default OfferView;
