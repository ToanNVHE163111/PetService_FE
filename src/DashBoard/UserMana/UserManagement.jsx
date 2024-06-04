import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";

const UserManagement = () => {
  return (
    <Container fluid>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <div>
            <Row className="ml-1 mb-4">
              <h3>UserManagement</h3>
            </Row>
          </div>

          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Birth Day</th>
                <th>Phone</th>
                <th>Email</th>
                <th>User Name</th>
              </tr>
            </thead>

            <tbody className="text-center">
              <tr>
                <td>Nguyễn Văn Thắng</td>
                <td>male</td>
                <td>Hà Nội</td>
                <td>10/12/2002</td>
                <td>113</td>
                <td>thang@gmail.com</td>
                <td>thangnv</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserManagement;
