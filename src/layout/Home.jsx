import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import images from "../assets/images/pet-cover.png";
import Header from "../components/Header";
import Products_Card from "../model/Products_Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <Row>
        <Header />
      </Row>
      <Row className="container">
        <Col md={3} className="d-flex align-items-center">
          <h2>PET SERVICE</h2>
          <p>Sản Phẩm</p>
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
        <Col className="d-flex align-content-between flex-wrap" md={9}>
          {products.map((product) => (
            <div key={product._id}>
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
    </div>
  );
};

export default Home;
