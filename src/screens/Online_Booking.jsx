import React from "react";
import Header from "../components/Header";
import { Button, Col, Row } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import Form from "react-bootstrap/Form";

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
          <img src={logo} alt="logo" />
        </div>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Row>
            <Col md={8}>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Yêu Cầu Dịch Vụ</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Họ và Tên</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                      <Form.Label>Số Điện Thoại</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlTextarea2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                      <Form.Label>Địa Chỉ</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                      <Form.Label>Thời Gian</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                      <Form.Label>Tên Thú Cưng</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Loài</Form.Label>
                  <Form.Control as="select">
                    <option>Chó</option>
                    <option>Mèo</option>
                    <option>Khác</option>
                  </Form.Control>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                      <Form.Label>Thuộc Giống</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlTextarea2">
                      <Form.Label>Tuổi(Năm)</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                      <Form.Label>Trọng Lượng (Kg)</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                      <Form.Label>Ghi Chú</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Nhập một vài tình trạng của bé để chuyên viên của chúng tôi có thể hỗ trợ bạn tốt nhất..."
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <Button>Gửi yêu cầu</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={4}>
              <div>Bài viết mới </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Online_Booking;
