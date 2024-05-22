import React from "react";
import Header from "../components/Header";
import { Col, Form, Row } from "react-bootstrap";
import images from "../assets/images/logo.png";

const Online_Booking = () => {
  return (
    <div>
      <Row>
        <Header />
      </Row>
      <Row>
        <div
          className="mt-3 text-center"
          style={{ backgroundColor: "#f4f5f5", width: "100%", height: "200px" }}
        >
          <img src={images} alt="logo" />
        </div>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Row className="text-center">
            <Col md={8}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Col>
            <Col className="" md={4}>
              <div>jj</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Online_Booking;
