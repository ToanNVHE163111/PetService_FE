import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import OrderDetail from "./OrderDetail";

const PendingUser = ({ status }) => {
  const [orders, setOrders] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/booking/${userId}/${status}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Optionally, you can show a toast or handle the error message
      }
    };

    fetchOrders();
  }, [status, userId]);

  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleOrderDetail = (orderId) => {
    const order = orders.find((o) => o._id === orderId);
    setSelectedOrder(order);
    setVisible(true);
  };

  const handleCloseOrderDetail = () => {
    setVisible(false);
  };

  const formatCurrency = (number) => {
    if (typeof number === "number") {
      return number.toLocaleString("en-US", {
        currency: "VND",
      });
    }
  };
  return (
    <Container fluid>
      <Row className="ml-1 mb-4 mt-4">
        <Col md={6}></Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>Order Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Payment Method</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{formatDate(order.createdAt)}</td>
                  <td>{order.order_status}</td>{" "}
                  {/* Ensure order_status is correct */}
                  <td style={{ verticalAlign: "middle" }}>
                    {formatCurrency(order.service_type.price) + " ₫"}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {order.paymentMethod === "VnPay"
                      ? "VnPay - Đã thanh toán"
                      : order.paymentMethod}
                  </td>
                  <td>
                    <Eye
                      style={{
                        color: "blue",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOrderDetail(order._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {visible && (
        <OrderDetail
          visible={visible}
          setVisible={setVisible}
          order={selectedOrder}
          onClose={handleCloseOrderDetail}
        />
      )}
    </Container>
  );
};

export default PendingUser;
