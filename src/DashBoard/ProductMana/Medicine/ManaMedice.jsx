import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";
import AddMedicine from "./AddMedicine";
import EditMedicine from "./EditMedicine";

const ManaMedice = () => {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);


    return (
        <Container fluid>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <div>
            <Row className="ml-1 mb-4">
              <h3>Medicine Management</h3>
            </Row>
            <Row className="ml-1 mb-4">
            <Button onClick={() => setVisible(true)}>
                <PlusSquareFill className="mr-2" />
                Add Medicine
              </Button>
            </Row>
          </div>

          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Image</th>
                <th>Brand</th>
                <th>Quantity </th>
                <th>Option</th>
                <th colSpan={2}>Operation</th>
              </tr>
            </thead>

            <tbody className="text-center">
              <tr>
                <td>1</td>
                <td>name</td>
                <td>image</td>
                <td>cho</td>
                <td>12</td>
                <td>12</td>
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
                      onClick={() => setEditVisible(true)}
                    />
                  </i>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      {visible === true && (
        <AddMedicine visible={visible} setVisible={setVisible} />
      )}

      {editVisible === true && (
        <EditMedicine
          editVisible={editVisible}
          setEditVisible={setEditVisible}
          data={dataEdit}
        />
      )}
    </Container>
    );
};

export default ManaMedice;