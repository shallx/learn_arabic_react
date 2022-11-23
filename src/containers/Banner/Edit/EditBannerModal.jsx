import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function EditBannerModal(props) {
  const [updatedData, setUpdatedData] = useState(props.data);

  const onInputChange = (event, identifier) => {
    const data = { ...updatedData };
    data[identifier] = event.target.value;
    setUpdatedData(data);
  };

  const onSubmit = (event) => {
    // event.preventDefault();
    console.log("I am here");
    console.log(updatedData);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Modal show={props.show} onHide={props.handleClose} className="p3">
          <Modal.Header closeButton>
            <Modal.Title>Update Offer Banner</Modal.Title>
          </Modal.Header>

          <div className="p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={props.data.offer_name}
                onChange={(event) => onInputChange(event, "offer_name")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Details</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Details"
                value={props.data.offer_details}
                onChange={(event) => onInputChange(event, "offer_details")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Coupon</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Coupon"
                value={props.data.coupon_code}
                onChange={(event) => onInputChange(event, "coupon_code")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Background Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Coupon"
                value={props.data.background_image}
                onChange={(event) => onInputChange(event, "background_image")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Visibility</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Coupon"
                value={props.data.visibility}
                onChange={(event) => onInputChange(event, "visibility")}
              />
            </Form.Group>
          </div>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button
              variant="secondary"
              onClick={props.handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}

export default EditBannerModal;