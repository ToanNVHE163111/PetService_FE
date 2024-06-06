import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import images from "../assets/images/product.png";
import { Link, useParams } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";
import Simila_Product from "../components/Simila_Product";
import Comment from "./Comment";
import Products_Card from "../model/Products_Card";

const Product_Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Lấy thông tin sản phẩm
    fetch(`http://localhost:9999/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));

    // Lấy sản phẩm tương tự
    fetch(`http://localhost:9999/products/similar/${id}`)
      .then((response) => response.json())
      .then((data) => setSimilarProducts(data))
      .catch((error) => console.error(error));
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {/* <Header></Header> */}
      <Container className="mt-5">
        {product && (
          <Row>
            <Col md={6}>
              <div>
                <h2>{product.name}</h2>
                <h4>{product.price}</h4>
              </div>
            </Col>
            <Col md={6}>
              {product.image.map((imgSrc, index) => (
                <div key={index}>
                  <Zoom>
                    <img alt={product.name} src={imgSrc} width="500" />
                  </Zoom>
                </div>
              ))}
            </Col>
          </Row>
        )}
        {product && (
          <Row>
            <div
              className="cards flex-column"
              style={{ width: "100%", height: "28rem", marginRight: "10px" }}
            >
              <h2>Mô tả sản phẩm</h2>
              <p>{product.description}</p>
            </div>
          </Row>
        )}

        <Row>
          <Comment />
        </Row>
        <Row>
          <div>
            <Row
              className="container text-center"
              style={{ marginTop: "100px" }}
            >
              <Col md={12}>
                <h3 style={{ textAlign: "center" }}>Sản phẩm tương tự</h3>
              </Col>
              {similarProducts.map((similarProduct) => (
                <Col md={3} key={similarProduct._id}>
                  <Products_Card
                    name={similarProduct.name}
                    obj={similarProduct.pettype}
                    price={similarProduct.price}
                    img={similarProduct.image[0]}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Product_Detail;
