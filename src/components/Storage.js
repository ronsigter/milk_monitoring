import React, { useContext } from "react";

import { StateContext } from "../Context";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Storage = ({ status = "freeze" }) => {
  const { state, dispatch } = useContext(StateContext);

  const handleThaw = (storage) => {
    dispatch({
      type: status === "freeze" ? "thaw" : "done",
      payload: storage,
    });
  };

  const unThawed = state.storages.filter((storage) => storage.state === status);
  // .reverse();

  return (
    <Container>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>{status === "freeze" ? "Pump Date" : "Thawed Date"}</th>
            <th>Quantity</th>
            <th>Expiration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {unThawed.map((storage) => (
            <tr key={storage.id}>
              <td>{storage.id}</td>
              <td>{status === "freeze" ? storage.date : storage.thawedDate}</td>
              <td>{storage.quantity} mL</td>
              <td>
                {status === "freeze"
                  ? storage.expiration
                  : storage.thawedExpiration}
              </td>
              <td>
                <Button
                  onClick={() => handleThaw(storage)}
                  variant={status === "freeze" ? "info" : "success"}
                >
                  {status === "freeze" ? "Thaw" : "Done"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Storage;
