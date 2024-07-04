import React, { useState, useEffect } from "react";
import { Breadcrumb, Col, Container, Form, Row } from "react-bootstrap";
import images from "../assets/images/pet-cover.png";
import Header from "../components/Header";
import Products_Card from "../model/Products_Card";
import { Link } from "react-router-dom";
import { Paginator } from "primereact/paginator"; // Import Paginator
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:9999/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9999/category")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  const onPageChange = (event) => {
    setFirst(event.first);
    setCurrentPage(event.page + 1);
    setRows(event.rows);
  };
  const productsOnPage = products.slice(first, first + rows); // Danh sách sản phẩm trên trang hiện tại

  return (
    <div>
      <Row className="mt-4 ml-2">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item active>Danh sách sản phẩm</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row className="container">
        <Col md={3} className="d-flex align-items-center">
          <h2>PET PRODUCTS</h2>
        </Col>
        <Col md={9}>
          <div></div>
          <img src={images} style={{ maxWidth: "70rem", height: "auto" }} />
        </Col>
      </Row>
      <Row>
        <Col md={3} className="d-flex justify-content-center">
          <Row>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Danh mục sản phẩm</Form.Label>
                <Form.Control as="select">
                  <option value="0">Tất cả</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </Row>
        </Col>
        <Col className="d-flex align-content-between flex-wrap " md={9}>
          {productsOnPage.map((product) => (
            <div key={product._id} style={{ marginBottom: "10px" }}>
              <Link to={`/detail/${product._id}`}>
                <Products_Card
                  name={product.name}
                  obj={product.pettype}
                  price={product.price}
                  img={product.image[0]}
                />
              </Link>
            </div>
          ))}
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Paginator
          first={first}
          rows={rows}
          totalRecords={products.length}
          onPageChange={onPageChange}
        />
      </Row>
    </div>
  );
};

export default Home;
