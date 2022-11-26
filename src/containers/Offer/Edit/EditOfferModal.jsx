import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useEffect } from "react";

function EditBannerModal(props) {
  const [updatedData, setUpdatedData] = useState({});
  useEffect(() => {
    console.log("Running useEffect");
    setUpdatedData({ ...props.data });
  }, [props.data]);

  const onInputChange = (event, identifier) => {
    const data = { ...updatedData };
    data[identifier] = event.target.value;
    setUpdatedData(data);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(updatedData);
    props.onUpdateData(updatedData);
    props.handleClose();
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} className="p3">
        <Modal.Header closeButton>
          <Modal.Title>Update Offer Banner</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
          <div className="p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={updatedData.offer_name || ''}
                onChange={(event) => onInputChange(event, "offer_name")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Details</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Details"
                value={updatedData.offer_details || ''}
                onChange={(event) => onInputChange(event, "offer_details")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Coupon</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Coupon"
                value={updatedData.coupon_code || ''}
                onChange={(event) => onInputChange(event, "coupon_code")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Background Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Coupon"
                value={updatedData.background_image || ''}
                onChange={(event) => onInputChange(event, "background_image")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Visibility</Form.Label>
              <Form.Select
                value={`${updatedData.visibility}` || ''}
                onChange={(event) => onInputChange(event, "visibility")}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </div>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditBannerModal;
