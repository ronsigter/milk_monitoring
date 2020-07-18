import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AddItem from "./AddItem";

import { StateContext } from "../Context";

const Home = () => {
  const { state } = useContext(StateContext);

  const storedCapacity = state.storages
    .map((milk) => parseInt(milk.quantity))
    .reduce((total, quantity) => total + quantity, 0);
  const consumedCapacity = state.storages
    .filter((milk) => milk.state === "done")
    .map((milk) => parseInt(milk.quantity))
    .reduce((total, quantity) => total + quantity, 0);
  const freezeCount = state.storages.filter((milk) => milk.state === "freeze")
    .length;
  const thawedCount = state.storages.filter((milk) => milk.state === "thawed")
    .length;

  const lastItem = state.storages.slice(-1)[0];

  const remainingCapacity = storedCapacity - consumedCapacity;

  return (
    <>
      <Row>
        <Col
          className="text-center justify-content-center align-items-center"
          style={{ paddingTop: "16px" }}
        >
          <a href="https://docs.google.com/spreadsheets/d/1C7HAwFojqKU5Yd4nFLwyPQg9iTNAoTNDAaSE1ftWuBM/edit#gid=0">
            Google Sheet Link
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {/* <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Last Count</Col>
              <Col>
                <p className="text-center">{lastItem.id}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Last Date of Storage</Col>
              <Col>
                <p className="text-center">{lastItem.date}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Total stored milk</Col>
              <Col>
                <p className="text-center">{storedCapacity} mL</p>
              </Col>
            </Row>
          </Container>
        </Col> */}
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Remaining milk</Col>
              <Col>
                <p className="text-center">{remainingCapacity / 1000} L</p>
              </Col>
            </Row>
          </Container>
        </Col>
        {/* <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Total drank milk</Col>
              <Col>
                <p className="text-center">{consumedCapacity} mL</p>
              </Col>
            </Row>
          </Container>
        </Col> */}
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Remaining Frozen Milk</Col>
              <Col>
                <p className="text-center">{freezeCount}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Current Thawed Milk</Col>
              <Col>
                <p className="text-center">{thawedCount}</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      {/* <Row className="justify-content-center">
        <AddItem />
      </Row> */}
    </>
  );
};

const summaryStyle = {
  margin: "16px",
};

export default Home;
