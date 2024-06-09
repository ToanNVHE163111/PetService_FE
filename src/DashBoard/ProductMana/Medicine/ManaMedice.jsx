import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";
import AddMedicine from "./AddMedicine";
import EditMedicine from "./EditMedicine";
import axios from "axios";
const ManaMedice = () => {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/medicines")
      .then((resp) => resp.json())
      .then((data) => {
        setMedicine(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const imageBodyTemplate = (p) => {
    return (
      <img
        src={p.images[0]}
        alt="image"
        style={{ height: "150px", width: "150px" }}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const handleDeleteMedice = (id) => {
    if (window.confirm(`Do you want to delete the medice - ID: ${id}?`)) {
      axios
        .delete(`http://localhost:9999/medicines/${id}`)
        .then(() => {
          alert("Delete successfully!");
          setMedicine(medicine.filter((medicine) => medicine._id !== id));
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  };

  const handleEditMedicine = (m) => {
    setDataEdit(m); // Cập nhật giá trị dataEdit bằng dữ liệu sản phẩm cần chỉnh sửa
    setEditVisible(true); // Hiển thị giao diện chỉnh sửa sản phẩm
  };

  return (
    <Container fluid>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <div>
            <Row className="ml-1 mb-4 mt-4">
              <h3>Medicine Management</h3>
            </Row>
            {/* <Row className="ml-1 mb-4">
              <Button onClick={() => setVisible(true)}>
                <PlusSquareFill className="mr-2" />
                Add Medicine
              </Button>
            </Row> */}
          </div>

          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Image</th>
                <th>Quantity </th>
                <th>Pet Type</th>
                <th colSpan={2}>Operation</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {medicine.map((m, index) => (
                <tr key={index}>
                  <td>{m._id}</td>
                  <td>{m.name}</td>
                  <td>{imageBodyTemplate(m)}</td>
                  <td>{m.quantity}</td>
                  <td>{m.pettype}</td>
                  <td>
                    <i className="delete">
                      <Trash
                        style={{
                          color: "red",
                          fontSize: "25px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteMedice(m._id)} 

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
                        onClick={() => handleEditMedicine(m)}
                      />
                    </i>
                  </td>
                </tr>
              ))}
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
