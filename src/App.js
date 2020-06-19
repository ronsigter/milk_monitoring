import React, { useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Home from "./components/Home";
import Storage from "./components/Storage";
import Tabletop from "tabletop";
import { StateContext } from "./Context";
import ReactLoading from "react-loading";

function App() {
  const [view, setView] = useState("home");
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/1C7HAwFojqKU5Yd4nFLwyPQg9iTNAoTNDAaSE1ftWuBM/edit?usp=sharing",
      simpleSheet: true,
    }).then((data) => {
      dispatch({
        type: "storages",
        payload: data,
      });
    });
  }, []);

  return state.loading ? (
    <div style={loader}>
      <ReactLoading type="bars" color="#007bff" height={300} width={300} />
    </div>
  ) : (
    <Container>
      <Row>
        <Col>
          <header style={headerStyle}>
            <h1>ZL's Milk Storage</h1>
          </header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav
            variant="tabs"
            defaultActiveKey="home"
            onSelect={(selectedKey) => setView(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="storage">Storage</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="thawed">Thawed Milk</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      {view === "home" ? (
        <Home />
      ) : view === "storage" ? (
        <Storage status="freeze" />
      ) : view === "thawed" ? (
        <Storage status="thawed" />
      ) : (
        "Something went wrong"
      )}
    </Container>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  paddin: "10px",
};

const loader = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default App;
