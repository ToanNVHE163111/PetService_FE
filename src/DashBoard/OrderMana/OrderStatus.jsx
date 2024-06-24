import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import axios from "axios";
import OrderDetail from "./OrderDetail";
import { toast } from "react-toastify";

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
            <table className="table table-condensed">
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>Ngày Đặt Hàng</th>
                  <th style={{ width: "25%" }}>Trạng Thái</th>
                  <th style={{ width: "20%" }}>Tổng</th>
                  {/* <th style={{ width: "20%" }}>Action</th> */}
                  <th>Hoạt Động</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td style={{ verticalAlign: "middle" }}>
                      {formatDate(order.createdAt)}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{order.status}</td>
                    <td style={{ verticalAlign: "middle" }}>
                      {order.totalAmount}
                    </td>
                    {/* {order.status === "Completed" && (
                      <td>
                        <Button
                          style={{ backgroundColor: "green", border: "none" }}
                          onClick={() => handleReceived(order._id)}
                          disabled={order.received}
                        >
                          {order.received ? "Received" : "Mark as Received"}
                        </Button>
                      </td>
                    )}
                    {(order.status === "Pending" ||
                      order.status === "Processing") && (
                      <td>
                        <Button
                          disabled
                          style={{ backgroundColor: "red", border: "none" }}
                        >
                          In delivery
                        </Button>
                      </td>
                    )} */}
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
            </table>
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
