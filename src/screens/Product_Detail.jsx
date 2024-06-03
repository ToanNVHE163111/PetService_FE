import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import images from "../assets/images/product.png";
import { Link } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";
import Simila_Product from "../components/Simila_Product";
import Comment from "./Comment";

const Product_Detail = () => {
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
      <Header></Header>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <div>
              <h2>
                Alkin Mitecyn 50ml - Xịt trị viêm da, nấm, ghẻ cho chó mèo
              </h2>
              <h4>140000</h4>
            </div>
            <div>
              <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <div>
                <Link className="btn btn-dark d-flex align-items-center rounded-pill mr-3">
                  <span>Thêm Vào Giỏ Hàng</span>
                  <Cart className="ml-2" />
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <Zoom>
                <img
                  alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                  src={images}
                  width="500"
                />
              </Zoom>
            </div>
          </Col>
        </Row>
        <Row>
          <div
            className="cards flex-column"
            style={{ width: "100%", height: "28rem", marginRight: "10px" }}
          >
            <h2>Mô tả sản phẩm </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </Row>
        <Row>
          <Comment/>
        </Row>
        <Row>
          <div>
            <Simila_Product></Simila_Product>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Product_Detail;
