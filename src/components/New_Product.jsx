import React from "react";
import { Col, Row } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Products_Card from "../model/Products_Card";
import New_Products_Cart from "../model/New_Products_Cart";

const New_Product = () => {
  return (
    <Row className="container" style={{ width: "100%", marginTop: "100px" }}>
      <Col md={5}>
        <div className="text-center">
          <p>PET SHOP</p>
          <h2>New Products</h2>
        </div>
      </Col>
      <Col md={7} className="d-flex">
        <div>
          <New_Products_Cart></New_Products_Cart>
        </div>
        <div>
          <New_Products_Cart></New_Products_Cart>
        </div>
        <div>
          <New_Products_Cart></New_Products_Cart>
        </div>
      </Col>
    </Row>
  );
};

export default New_Product;
