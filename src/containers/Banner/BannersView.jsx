import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { FallingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { updateBanners } from "../../redux/banner/bannerSlice";
import TableRowBanner from "../../redux/banner/TableRowBanner";
import EditBannerModal from "./Edit/EditBannerModal";

function BannersView(props) {
  const banner = useSelector((state) => state.banner);
  const [showModal, setShowModal] = useState(false);
  const [selectedBrandBanner, setSelectedBrandBanner] = useState({});
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = (item) => {
    console.log(item);
    setSelectedBrandBanner(item);
    setShowModal(true);
  };

  return banner.bannerData != null && !banner.isLoading ? (
    <>
      <ToastContainer />
      <EditBannerModal
        show={showModal}
        handleClose={handleCloseModal}
        data={selectedBrandBanner}
        onUpdateData={(updatedData) => dispatch(updateBanners(updatedData))}
      ></EditBannerModal>
      <h1 className="text-center p3">Banners</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Coupon</th>
            <th>Background Image</th>
            <th>Background Responsive</th>
            <th>Visibility</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {banner.bannerData == null
            ? ""
            : banner.bannerData.map((item) => (
                <TableRowBanner
                  key={item.id}
                  coupon={item.coupon_code}
                  background_responsive={item.background_responsive}
                  image={item.background_image}
                  visibility={item.visibility}
                  showModal={() => handleShowModal(item)}
                ></TableRowBanner>
              ))}
        </tbody>
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

export default BannersView;
