import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import useViewModel from "./OfferViewModel";
import { FallingLines } from "react-loader-spinner";

import { Table } from "react-bootstrap";
import { useState } from "react";
import TableRow from "./TableRow";
import EditBannerModal from "./Edit/EditOfferModal";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { updateOffers } from "../../redux/offer/offerSlice";

function OfferView(props) {
  // const { updateData } = useViewModel();
  const [showModal, setShowModal] = useState(false);
  const [selectedBrandBanner, setSelectedBrandBanner] = useState({});

  const offer = useSelector((state) => state.offer)
  const dispatch = useDispatch()

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
  if (offer.offerData != null) {
    row = offer.offerData.map((item) => (
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

  return (offer.offerData != null && !offer.isLoading) ? (
    <>
    <ToastContainer/>
      <EditBannerModal
        show={showModal}
        handleClose={handleCloseModal}
        data={selectedBrandBanner}
        onUpdateData={(updatedData) => dispatch(updateOffers(updatedData))}
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
