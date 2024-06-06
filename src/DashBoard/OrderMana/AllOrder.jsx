import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormSelect,
  Row,
  Table,
} from "react-bootstrap";
import { PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";
const AllOrder = () => {
  return (
    <Container fluid>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>ID</th>
                <th> Date</th>
                <th>Customer</th>
                <th>Status </th>
                <th>Item</th>
                <th>Total</th>
                <th>Payments</th>
                <th colSpan={2}>Operation</th>
              </tr>
            </thead>

            <tbody className="text-center">
              <tr>
                <td>1</td>
                <td>6/6/2024</td>
                <td>Nguyễn Văn Thắng</td>
                <td>
                  <FormSelect style={{borderRadius:'30px', width:'110px', border:'none', paddingLeft:'8px'}}>
                    <option value="0">Pending</option>
                    <option value="1">Processing</option>
                    <option value="2">Completed</option>
                  </FormSelect>
                </td>
                <td>1</td>
                <td>100000</td>
                <td>Momo</td>
                <td>
                  <i className="delete">
                    <Trash
                      style={{
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    />
                  </i>
                </td>
                <td>
                  <i className="edit">
                    <PenFill
                      style={{
                        color: "blue",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    />
                  </i>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AllOrder;
