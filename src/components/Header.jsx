import React from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "../assets/images/Pet_logo.png";
import { SendFill } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Container fluid className="mt-2">
      <Row className="align-items-center">
        <Col md={3} className="d-flex justify-content-center mt-2">
          <div>
            <img
              src={images}
              alt="Description of the image"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>
        </Col>

        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="d-flex ">
            <ul className="list-unstyled d-flex justify-content-between m-0">
              <li className="mr-4 d-flex  align-items-center ">
                <Link to="/" style={{ color: "#2a3977", fontWeight: "bold" }}>
                  Trang chủ
                </Link>
              </li>
              <li className="mr-4 d-flex  align-items-center ">
                <Link
                  to="/gioi-thieu"
                  style={{ color: "#2a3977", fontWeight: "bold" }}
                >
                  Giới thiệu
                </Link>
              </li>
              <li className="mr-4">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-services"
                    style={{ color: "#2a3977", fontWeight: "bold" }}
                  >
                    Dịch vụ
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/service1">Dịch vụ 1</Dropdown.Item>
                    <Dropdown.Item href="/service2">Dịch vụ 2</Dropdown.Item>
                    <Dropdown.Item href="/service3">Dịch vụ 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="mr-4">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-shop"
                    style={{ color: "#2a3977", fontWeight: "bold" }}
                  >
                    Cửa hàng
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/shop1">Cửa hàng 1</Dropdown.Item>
                    <Dropdown.Item href="/shop2">Cửa hàng 2</Dropdown.Item>
                    <Dropdown.Item href="/shop3">Cửa hàng 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="mr-4">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-blog"
                    style={{ color: "#2a3977", fontWeight: "bold" }}
                  >
                    Blog
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/blog1">Bài viết 1</Dropdown.Item>
                    <Dropdown.Item href="/blog2">Bài viết 2</Dropdown.Item>
                    <Dropdown.Item href="/blog3">Bài viết 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="mr-4 d-flex  align-items-center ">
                <Link
                  to="/contact"
                  style={{ color: "#2a3977", fontWeight: "bold" }}
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={3} className="d-flex justify-content-center">
          <div>
            <Link
              to="/online-booking"
              className="btn btn-dark d-flex align-items-center rounded-pill mr-3"
            >
              <span>Online Booking</span>
              <SendFill className="ml-2" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
