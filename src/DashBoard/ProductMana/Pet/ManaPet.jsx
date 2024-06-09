import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";
import AddPet from "./AddPet";
import EditPet from "./EditPet";
import axios from "axios";

const ManaPet = () => {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);
  const [pet, setPet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/pets")
      .then((resp) => resp.json())
      .then((data) => {
        setPet(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const imageBodyTemplate = (p) => {
    return (
      <img
        src={p.image[0]}
        alt="image"
        style={{ height: "150px", width: "150px" }}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const handleDeletePet = (id) => {
    if (window.confirm(`Do you want to delete pet - ID: ${id}?`)) {
      axios
        .delete(`http://localhost:9999/pets/${id}`)
        .then(() => {
          alert("Delete successfully!");
          setPet(pet.filter((pet) => pet._id !== id));
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  };
  const handleEditFood = (p) => {
    setDataEdit(p); // Cập nhật giá trị dataEdit bằng dữ liệu sản phẩm cần chỉnh sửa
    setEditVisible(true); // Hiển thị giao diện chỉnh sửa sản phẩm
  };

  return (
    <Container fluid>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <div>
            <Row className="ml-1 mb-4 mt-4">
              <h3>Pet Management</h3>
            </Row>
            {/* <Row className="ml-1 mb-4 ">
              <Button onClick={() => setVisible(true)}>
                <PlusSquareFill className="mr-2" />
                Add Pet
              </Button>
            </Row> */}
          </div>

          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>ID</th>
                <th> Breed</th>
                <th>Gender</th>
                <th>Image</th>
                <th>Quantity </th>
                <th>PetType</th>
                <th colSpan={2}>Operation</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {pet.map((p, index) => (
                <tr key={index}>
                  <td>{p._id}</td>
                  <td>{p.breed}</td> 
                  <td>{p.gender}</td>
                  <td>{imageBodyTemplate(p)}</td>
                  <td>{p.quantity}</td>
                  <td>{p.pettype}</td>
                  <td>
                    <i className="delete">
                      <Trash
                        style={{
                          color: "red",
                          fontSize: "25px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeletePet(p._id)} 
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
                        onClick={() => handleEditFood(p)}
                      />
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {visible === true && <AddPet visible={visible} setVisible={setVisible} />}

      {editVisible === true && (
        <EditPet
          editVisible={editVisible}
          setEditVisible={setEditVisible}
          data={dataEdit}
        />
      )}
    </Container>
  );
};

export default ManaPet;
