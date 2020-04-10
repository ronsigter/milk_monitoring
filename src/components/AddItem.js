import React, { useState, useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { StateContext } from "../Context";

const AddItem = () => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { dispatch } = useContext(StateContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleStore = () => {
    dispatch({
      type: "store",
      payload: quantity
    });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Milk
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Woohoo! Another Milk for ZL!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">
                Quantity
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={e => setQuantity(e.target.value)}
              value={quantity}
            />
            <InputGroup.Append>
              <InputGroup.Text>mL</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleStore}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddItem;
