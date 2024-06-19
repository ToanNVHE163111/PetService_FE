import React, { useEffect, useState } from "react";
import "../style/payment.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { CashStack } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import axios from "axios";
const Checkout = () => {
  const location = useLocation();
  const { listCart } = location.state || { listCart: [] };
  const [profile, setProfile] = useState({});
  const username = localStorage.getItem("username");
  const [paymentMethod, setPaymentMethod] = useState("0");
  const nav = useNavigate()
  const calculateTotal = () => {
    let total = 0;
    listCart.forEach((p) => {
      total += p.productId.price * p.quantity;
    });
    return total;
  };

  const calculateTotalItems = () => {
    let totalItems = 0;
    listCart.forEach((p) => {
      totalItems += p.quantity;
    });
    return totalItems;
  };

  useEffect(() => {
    fetch(`http://localhost:9999/users/${username}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [username]);

  const handlePlaceOrder = () => {
    const orderData = {
      paymentMethod: paymentMethod === "COD" ? "COD" : paymentMethod,
      listCart: listCart,
      profile: profile,
    };

    axios
      .post("http://localhost:9999/payment", orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.message) toast.success(data.message);
        nav("/")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="payment-body">
        <div className="container">
          <div className="row upper">
            <span id="payment">
              <span id="three">Checkout</span>
            </span>
          </div>
          <div className="row">
            <Col md={6} sm={6} xs={12}>
              <div className="payment-right border">
                <div className="section-title">
                  <h3 className="title pb-4 text-center">Billing address</h3>
                </div>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    className="input"
                    type="text"
                    name="full-name"
                    placeholder="Full Name"
                    value={profile.fullname || ""}
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={profile.gmail || ""}
                    placeholder="Email"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    className="input"
                    type="text"
                    name="address"
                    value={profile.address || ""}
                    placeholder="Address"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    className="input"
                    type="tel"
                    name="tel"
                    value={profile.phone || ""}
                    placeholder="Telephone"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Payment method</label>
                  <select
                    className="input payment_method w-100"
                    style={{ height: "35px" }}
                    name="payment_method"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="0">Choose payment method</option>
                    <option value="COD">Ship Cod</option>
                    <option value="zalopay">Pay with zalopay</option>
                  </select>
                </div>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12}>
              <div className="payment-right border">
                <div className="payment-header">Order Summary</div>
                <p>{calculateTotalItems()} items</p>
                {listCart.map((p, index) => (
                  <Row className="payment-row item" key={index}>
                    <Col md={4} className="align-self-center">
                      <img
                        className="img-fluid"
                        src={p.productId.image[0]}
                        alt="Product 1"
                      />
                    </Col>
                    <Col md={8}>
                      <div className="payment-row">
                        <b>{p.productId.name}</b>
                      </div>
                      <div className="payment-row mt-2">
                        <h5>
                          <CashStack
                            style={{ color: "yellow", fontSize: "30px" }}
                          />
                          {p.productId.price} VND
                        </h5>
                      </div>
                      <div className="payment-row text-muted">
                        <h6> Quantity: {p.quantity}</h6>
                      </div>
                    </Col>
                  </Row>
                ))}
                <hr />
                <div className="payment-row lower">
                  <div className="payment-col text-left">Delivery</div>
                  <div className="payment-col text-right">Free</div>
                </div>
                <div className="payment-row lower">
                  <div className="payment-col text-left">
                    <b>Total to pay</b>
                  </div>
                  <div className="payment-col text-right">
                    <b>{calculateTotal()} VND</b>
                  </div>
                </div>
                {paymentMethod !== "0" && (
                  <button className="payment-btn" onClick={handlePlaceOrder}>
                    {paymentMethod === "zalopay" ? "Pay with zalopay" : "Place order"}
                  </button>
                )}
              </div>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
