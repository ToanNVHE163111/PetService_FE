import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import images from "../assets/images/pet-cover.png";
import Header from "../components/Header";
import Products_Card from "../model/Products_Card";
const Home = () => {
  return (
    <div>
      <Row>
        <Header></Header>
      </Row>
      <Row className="container">
        <Col md={3} className="d-flex align-items-center">
          <h2>PET SERVICE </h2>
          <p>Sản Phẩm</p>
        </Col>
        <Col md={9}>
          <div></div>
          <img src={images} style={{ maxWidth: "70rem", height: "auto" }}></img>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="d-flex justify-content-center">
          <Row>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Danh mục sản phẩm </Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Row>
        </Col>
        <Col className="d-flex align-content-between flex-wrap" md={9}>
          <div>
            <Products_Card></Products_Card>
          </div>
          <div>
            <Products_Card />
          </div>
          <div>
            <Products_Card />
          </div>
          <div>
            <Products_Card />
          </div>
          <div>
            <Products_Card />
          </div>
          <div>
            <Products_Card />
          </div>
          <div>
            <Products_Card />
          </div>
          <div>
            <Products_Card />
          </div>
          <div>
            <Products_Card />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
