import React from "react";
import { Col, Row } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Products_Card from "../model/Products_Card";

const Hot_Product = () => {
  return (
    <Row className="container" style={{ width: "100%", marginTop: "100px" }}>
      <Col md={5}>
        <div className="text-center">
          <p>PET SERVICE</p>
          <h2>HOT ITEMS</h2>
          <h3>SẢN PHẨM NỔI BẬT</h3>
        </div>
        <div className="text-center mt-5">
          <Link
            to="/shop"
            className="btn btn-secondary align-items-center rounded-pill mr-3"
          >
            <span>Trang chủ</span>
            <SendFill className="ml-2" />
          </Link>
        </div>
      </Col>
      <Col md={7} className="d-flex">
        <div>
          <Products_Card></Products_Card>
        </div>
        <div>
          <Products_Card></Products_Card>
        </div>
        <div>
          <Products_Card></Products_Card>
        </div>
      </Col>
    </Row>
  );
};

export default Hot_Product;
