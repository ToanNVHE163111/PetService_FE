import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormSelect,
  Row,
  Table,
} from "react-bootstrap";
import { Eye, PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";
import axios from "axios";
import OrderDetail from "./OrderDetail";
const AllOrder = () => {
  const [listOrder, setListOrder] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null); // State để lưu đơn hàng được chọn

  useEffect(() => {
    axios
      .get("http://localhost:9999/payment")
      .then((response) => {
        setListOrder(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const handleStatusChange = (e, orderId) => {
    const newStatus = e.target.value;
    axios
      .put(`http://localhost:9999/payment/${orderId}`, { status: newStatus })
      .then((response) => {
        const updatedListOrder = listOrder.map((order) => {
          if (order._id === orderId) {
            return { ...order, status: newStatus };
          }
          return order;
        });
        setListOrder(updatedListOrder);
        console.log("Trạng thái đã được cập nhật thành công");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleOrderDetail = (orderId) => {
    // Tìm đơn hàng được chọn từ danh sách orders
    const order = listOrder.find((o) => o._id === orderId);
    setSelectedOrder(order); // Lưu thông tin đơn hàng vào state selectedOrder
    setVisible(true); 
  };

  return (
    <Container fluid>
      <Row className="ml-1 mb-4 mt-4">
        <Col md={6}>
          <h3>Order Management</h3>
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>Order Date</th>
                <th>Customer</th>
                <th>Status </th>
                <th>Total</th>
                <th>Payments</th>
                <th>Operation</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {listOrder.map((o) => (
                <tr key={o._id}>
                  <td> {formatDate(o.createdAt)}</td>
                  <td>{o.userId.fullname}</td>
                  <td>
                    <FormSelect
                      style={{
                        borderRadius: "30px",
                        width: "110px",
                        border: "none",
                        paddingLeft: "8px",
                      }}
                      value={o.status}
                      onChange={(e) => handleStatusChange(e, o._id)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                    </FormSelect>
                  </td>

                  <td>{o.totalAmount}</td>
                  <td>{o.paymentMethod}</td>

                  <td>
                    <i className="edit">
                      <Eye
                        style={{
                          color: "blue",
                          fontSize: "25px",
                          cursor: "pointer",
                          
                        }}
                      onClick={() => handleOrderDetail(o._id)}

                      />
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {visible === true && (
        <OrderDetail visible={visible} setVisible={setVisible} order={selectedOrder} />
      )}
    </Container>
  );
};

export default AllOrder;
