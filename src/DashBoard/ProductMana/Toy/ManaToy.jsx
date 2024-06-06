import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";
import AddToy from "./AddToy";
import EditToy from "./EditToy";

const ManaToy = () => {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);
  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/toys")
      .then((resp) => resp.json())
      .then((data) => {
        setToy(data);
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
  const handleEditToy = (t) => {
    setDataEdit(t); // Cập nhật giá trị dataEdit bằng dữ liệu sản phẩm cần chỉnh sửa
    setEditVisible(true); // Hiển thị giao diện chỉnh sửa sản phẩm
  };

  return (
    <Container fluid>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <div>
            <Row className="ml-1 mb-4 mt-4">
              <h3>Toy Management</h3>
            </Row>
            {/* <Row className="ml-1 mb-4">
              <Button onClick={() => setVisible(true)}>
                <PlusSquareFill className="mr-2" />
                Add Toy
              </Button>
            </Row> */}
          </div>

          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Quantity </th>
                <th>Image</th>
                <th>Pet Type</th>
                <th colSpan={2}>Operation</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {toy.map((t, index) => (
                <tr key={index}>
                  <td>{t._id}</td>
                  <td>{t.name}</td>
                  <td>{t.quantity}</td>
                  <td>{imageBodyTemplate(t)}</td>
                  <td>{t.pettype}</td>
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
                        onClick={() => handleEditToy(t)}
                      />
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {visible === true && <AddToy visible={visible} setVisible={setVisible} />}

      {editVisible === true && (
        <EditToy
          editVisible={editVisible}
          setEditVisible={setEditVisible}
          data={dataEdit}
        />
      )}
    </Container>
  );
};

export default ManaToy;
