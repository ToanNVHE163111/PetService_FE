import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Table } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import axios from "axios";
import OrderDetail from "./OrderDetail";

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [visible, setVisible] = useState(false);

  const user = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:9999/payment/user/${user}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [user]);

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
  function formatCurrency(number) {
    // Sử dụng hàm toLocaleString() để định dạng số thành chuỗi với ngăn cách hàng nghìn và mặc định là USD.
    if (typeof number === "number") {
      return number.toLocaleString("en-US", {
        currency: "VND",
      });
    }
  }
  // const handleReceived = (orderId) => {
  //   axios
  //     .put(`http://localhost:9999/payment/${orderId}`, { received: true })
  //     .then((response) => {
  //       const updatedOrders = orders.map((order) => {
  //         if (order._id === orderId) {
  //           return { ...order, received: true };
  //         }
  //         return order;
  //       });
  //       setOrders(updatedOrders);
  //       toast.success("Order marked as received successfully!");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       toast.error("Failed to mark the order as received.");
  //     });
  // };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <div className="table-responsive">
            {orders.length === 0 ? (
              <h5 style={{ marginTop: "30px" }}>
                Bạn chưa đặt đơn hàng nào !!!{" "}
              </h5>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th style={{ width: "15%" }}>Order Date</th>
                    <th style={{ width: "25%" }}>Status</th>
                    <th style={{ width: "20%" }}>Total</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td style={{ verticalAlign: "middle" }}>
                        {formatDate(order.createdAt)}
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {order.status}
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {formatCurrency(order.totalAmount) + " ₫"}
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
            )}
          </div>
        </Col>
      </Row>
      {visible && (
        <OrderDetail
          visible={visible}
          setVisible={setVisible}
          order={selectedOrder}
        />
      )}
    </Container>
  );
};

export default OrderStatus;
