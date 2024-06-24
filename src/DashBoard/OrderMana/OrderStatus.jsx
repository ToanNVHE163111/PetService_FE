import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Eye, Trash } from "react-bootstrap-icons";
import axios from "axios";
import OrderDetail from "./OrderDetail";

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // State để lưu đơn hàng được chọn
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
    // Tìm đơn hàng được chọn từ danh sách orders
    const order = orders.find((o) => o._id === orderId);
    setSelectedOrder(order); // Lưu thông tin đơn hàng vào state selectedOrder
    setVisible(true); 
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <div className="table-responsive">
            <table className="table table-condensed">
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
                    <td style={{ verticalAlign: "middle" }}>{order.status}</td>
                    <td style={{ verticalAlign: "middle" }}>
                      {order.totalAmount}
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
            </table>
          </div>
        </Col>
      </Row>
      {/* Hiển thị component OrderDetail khi visible === true */}
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
