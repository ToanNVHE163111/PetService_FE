import React, { useState } from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import images from "../assets/images/Pet_logo.png";
import {
  ArrowRepeat,
  BoxArrowInRight,
  CartFill,
  GraphUpArrow,
  PersonVcard,
  SendFill,
} from "react-bootstrap-icons";
import Cart from "../screens/Cart";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [visible, setVisible] = useState(false);
  const nav = useNavigate();
  const role = localStorage.getItem("role");
const fullname = localStorage.getItem("fullname");
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    nav("/");
    // Perform other logout steps if needed
  };

  return (
    <Container fluid className="mt-2">
      <Row className="align-items-center">
        <Col md={2} className="d-flex justify-content-center mt-2">
          <Link to={"/"}>
            <div>
              <img
                src={images}
                alt="Description of the image"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </div>
          </Link>
        </Col>

        <Col
          md={8}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="d-flex">
            <ul className="list-unstyled d-flex justify-content-between m-0">
              <li className="mr-4 d-flex align-items-center">
                <Link to="/" style={{ color: "#2a3977", fontWeight: "bold" }}>
                  Trang chủ
                </Link>
              </li>
              <li className="mr-4 d-flex align-items-center">
                <Link
                  to="/listproduct"
                  style={{ color: "#2a3977", fontWeight: "bold" }}
                >
                  Sản Phẩm
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
              <li style={{ marginTop: "7px", marginRight: "35px" }}>
                <Link
                  to="/blog"
                  style={{ color: "#2a3977", fontWeight: "bold" }}
                >
                  Blog
                </Link>
              </li>
              <li className="mr-4 d-flex align-items-center">
                <Link
                  to="/contact"
                  style={{ color: "#2a3977", fontWeight: "bold" }}
                >
                  Liên hệ
                </Link>
              </li>

              {isLoggedIn && parseInt(role) === 1 && (
                <li className="mr-4 d-flex align-items-center">
                  <Link
                    to="/dashboard"
                    style={{ color: "#2a3977", fontWeight: "bold" }}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li className="mr-4 d-flex align-items-center">
                {isLoggedIn ? (
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-settings"
                      style={{ color: "#2a3977", fontWeight: "bold" }}
                    >
                      {fullname}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {/* <Dropdown.Item href="/dashboard">
                        <GraphUpArrow
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        />
                        Dashboard
                      </Dropdown.Item> */}
                      <Dropdown.Item href="/changepass">
                        <ArrowRepeat
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        />
                        Change Password
                      </Dropdown.Item>
                      <Dropdown.Item href="/profile">
                        <PersonVcard
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        />
                        Account Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        <BoxArrowInRight
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        />
                        LogOut
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link
                    to="/login"
                    style={{ color: "#2a3977", fontWeight: "bold" }}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </Col>

        <Col md={1} className="d-flex justify-content-center">
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
        <Col
          md={1}
          className="d-flex justify-content-center"
          onClick={() => setVisible(true)}
          style={{ cursor: "pointer" }}
        >
          <CartFill style={{ fontSize: "30px", color: "#37457e" }} />
        </Col>
      </Row>
      {visible === true && <Cart visible={visible} setVisible={setVisible} />}
    </Container>
  );
};

export default Header;
