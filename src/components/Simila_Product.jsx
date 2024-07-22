import React from "react";
import { Row, Col } from "react-bootstrap";
import Products_Card from "../model/Products_Card";

const Simila_Product = () => {
  return (
    <div className=" text-center" style={{ width: "100%", marginTop: "100px" }}>
      <Row>
        <Col md={12} className=" text-center">
          <h3 style={{ textAlign: "center" }}>Sản phẩm tương tự</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="d-flex flex-wrap justify-content-between">
            <div style={{ width: "25%", margin: "10px" }}>
              <Products_Card />
            </div>
            <div style={{ width: "25%", margin: "10px" }}>
              <Products_Card />
            </div>
            <div style={{ width: "25%", margin: "10px" }}>
              <Products_Card />
            </div>
            <div style={{ width: "25%", margin: "10px" }}>
              <Products_Card />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Simila_Product;
