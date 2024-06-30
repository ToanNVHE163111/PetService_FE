import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";
import axios from "axios";

const AllProducts = () => {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
      axios
        .delete(`http://localhost:9999/products/${id}`)
        .then(() => {
          setProducts(products.filter((product) => product._id !== id));
          console.log("Deleted product successfully");
        })
        .catch((error) => {
          console.error("Failed to delete product:", error);
        });
    }
  };

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

  const handleEditProduct = (p) => {
    setDataEdit(p);
    setEditVisible(true);
  };

  return (
    <Container fluid>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <div>
            <Row className="ml-1 mb-4 mt-4">
              <Col md={6}>
                <h3>Products Management</h3>
              </Col>
              <Col md={6} className="d-flex justify-content-end">
                <Button onClick={() => setVisible(true)}>
                  <PlusSquareFill className="mr-2" />
                  Add Product
                </Button>
              </Col>
            </Row>
          </div>

          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Image</th>
                <th>Quantity </th>
                <th>Category</th>
                <th colSpan={2}>Operation</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {products.map((p, index) => (
                <tr key={index}>
                  <td>{p._id}</td>
                  <td>{p.name}</td>
                  <td>{imageBodyTemplate(p)}</td>
                  <td>{p.quantity}</td>
                  <td>{p.pettype}</td>
                  <td>
                    <i className="delete" onClick={() => handleDeleteProduct(p._id)}>
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
                        onClick={() => handleEditProduct(p)}
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
        <AddProducts visible={visible} setVisible={setVisible} />
      )}

      {editVisible === true && (
        <EditProduct
          editVisible={editVisible}
          setEditVisible={setEditVisible}
          data={dataEdit}
          productId={dataEdit._id}
        />
      )}
    </Container>
  );
};

export default AllProducts;
