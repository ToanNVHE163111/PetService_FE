import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import UserManagement from "../UserMana/UserManagement";
import OrderManagement from "../OrderMana/OrderManagement";
import ManaAllCateProduct from "../ProductMana/Product/ManaAllCateProduct";
import TotalDashBoard from "./TotalDashBoard";

const DashBoard = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row style={{ marginTop: "90px" }}>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column" >
            <Nav.Item>
              <Nav.Link eventKey="first" style={{color:'black'}}>Quản lí sản phẩm</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" style={{color:'black'}}>Quản lí người dùng</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three" style={{color:'black'}}>Quản lí đơn hàng</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four" style={{color:'black'}}>Quản lí dịch vụ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five" style={{color:'black'}}>Thống kê</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ManaAllCateProduct />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <UserManagement />
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <OrderManagement />
            </Tab.Pane>
            <Tab.Pane eventKey="five">
              <TotalDashBoard />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default DashBoard;
