import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import ProductManagement from "../ProductMana/ProductManagement";
import UserManagement from "../UserMana/UserManagement";
import OrderManagement from "../OrderMana/OrderManagement";

const DashBoard = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row style={{marginTop:'100px'}}>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Product Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">User Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three">Order Management</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ProductManagement />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <UserManagement />
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <OrderManagement />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default DashBoard;
