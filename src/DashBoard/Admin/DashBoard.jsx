import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import UserManagement from "../UserMana/UserManagement";
import OrderManagement from "../OrderMana/OrderManagement";
import ManaAllCateProduct from "../ProductMana/Product/ManaAllCateProduct";

const DashBoard = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row style={{ marginTop: "90px" }}>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column" >
            <Nav.Item>
              <Nav.Link eventKey="first" style={{color:'black'}}>Product Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" style={{color:'black'}}>User Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three" style={{color:'black'}}>Order Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four" style={{color:'black'}}>Service Management</Nav.Link>
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
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default DashBoard;
