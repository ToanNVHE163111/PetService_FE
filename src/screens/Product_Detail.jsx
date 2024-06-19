import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Header from "../components/Header";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import images from "../assets/images/product.png";
import { Link, useParams } from "react-router-dom";
import { Cart, CartPlus, Coin } from "react-bootstrap-icons";
import Simila_Product from "../components/Simila_Product";
import Comment from "./Comment";
import Products_Card from "../model/Products_Card";
import axios from "axios";
import { toast } from "react-toastify";

const Product_Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState(1);
  const userId = localStorage.getItem("userId");
  let categoryId;

  useEffect(() => {
    fetch(`http://localhost:9999/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // categoryId = data.category._id;
        console.log(categoryId);
        setProduct(data);
      })
      .catch((error) => console.error(error));

    fetch(`http://localhost:9999/products/similar/${id}`)
      .then((response) => response.json())
      .then((data) => setSimilarProducts(data))
      .catch((error) => console.error(error));
  }, [id]);
  const increaseQuantity = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decreaseQuantity = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };
  const handleAddToCart = () => {
    const cartItem = {
      userId: userId,
      productId: product._id,
      categoryId: product.category._id,
      quantity: value,
    };

    axios
      .post("http://localhost:9999/cart", cartItem)
      .then((response) => {
        toast.success("Added to cart successfully!");
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Failed to add to cart. Please try again.");
        console.error({ error: error.message });
      });
  };

  return (
    <Container className="mt-5">
      {product && (
        <Row>
          <Col md={6}>
            <div>
              <Zoom>
                <img
                  alt={product.name}
                  src={selectedImage || product.image[0]}
                  width="500"
                />
              </Zoom>
              <div>
                {product.image.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={product.name}
                    width="100"
                    style={{ cursor: "pointer", margin: "5px" }}
                    onClick={() => setSelectedImage(imgSrc)}
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h2>{product.name}</h2>
              <Coin
                style={{
                  color: "yellow",
                  fontSize: "27px",
                  marginRight: "5px",
                  marginBottom: "10px",
                }}
              />
              {product.price} <span>VND</span>
              <div class="d-flex align-items-center">
                <Button
                  onClick={decreaseQuantity}
                  style={{ borderRadius: "10px" }}
                >
                  -
                </Button>
                <input
                  className="text-center ml-2 mr-2"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{
                    width: "50px",
                    height: "37px",
                    borderRadius: "10px",
                  }}
                />
                <Button
                  onClick={increaseQuantity}
                  style={{ borderRadius: "10px" }}
                >
                  +
                </Button>
              </div>
              <div class="d-flex justify-content-start  mt-4 ">
                <Button
                  className="btn btn-danger d-block text-center w-50"
                  onClick={handleAddToCart}
                >
                  <CartPlus style={{ color: "white", fontSize: "30px" }} />
                  ADD TO CART
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      )}
      {product && (
        <Row>
          <div
            className="cards flex-column"
            style={{ width: "100%", height: "28rem", marginRight: "10px" }}
          >
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>
        </Row>
      )}
      <Row>
        <Comment />
      </Row>
      <Row>
        <div>
          <Row className="container text-center" style={{ marginTop: "100px" }}>
            <Col md={12}>
              <h3 style={{ textAlign: "center" }}>Similar Products</h3>
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
  );
};

export default Product_Detail;
