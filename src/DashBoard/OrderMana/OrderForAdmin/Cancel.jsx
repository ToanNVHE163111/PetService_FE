import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, FormSelect, Row, Table } from 'react-bootstrap';
import { Eye } from 'react-bootstrap-icons';
import OrderDetailAdmin from './OrderDetailAdmin';
import { toast } from 'react-toastify';

const Cancel = ({ status }) => {
    const [orders, setOrders] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:9999/payment/${status}`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [status]);

    const formatDate = (inputDate) => {
        const dateObject = new Date(inputDate);
        const day = dateObject.getDate().toString().padStart(2, "0");
        const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
        const year = dateObject.getFullYear();
        return `${day}-${month}-${year}`;
      };

      const handleStatusChange = (e, orderId) => {
        e.preventDefault();
        const newStatus = e.target.value; // Lấy giá trị mới của status từ dropdown
        axios
          .put("http://localhost:9999/payment/" + orderId, {
            status: newStatus, 
          })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Status updated successfully!");
              // Cập nhật trạng thái của đơn hàng trong state
              setOrders(prevOrders => {
                return prevOrders.map(order => {
                  if (order._id === orderId) {
                    return { ...order, status: newStatus };
                  }
                  return order;
                });
              });
            } else {
              console.log("Edit Status failed");
            }
          })
          .catch((error) => {
            console.error("Error: ", error);
          });
      };
    
     
      function formatCurrency(number) {
        // Sử dụng hàm toLocaleString() để định dạng số thành chuỗi với ngăn cách hàng nghìn và mặc định là USD.
        if (typeof number === "number") {
          return number.toLocaleString("en-US", {
            currency: "VND",
          });
        }
      }

      const handleOrderDetail = (orderId) => {
        const order = orders.find((o) => o._id === orderId);
        setSelectedOrder(order);
        setVisible(true);
      };


    return (
        <Container fluid>
      <Row className="ml-1 mb-4 mt-4">
        <Col md={6}>
          <h3>Đơn Đã Huỷ</h3>
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col md={12}>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>Ngày Đặt Hàng</th>
                <th>Khách Hàng</th>
                <th>Số Điện Thoại</th>
                <th>Địa Chỉ</th>
                <th>Trạng Thái</th>
                <th>Tổng</th>
                <th>Phương Thức Thanh Toán</th>
                <th>Hành Động</th>
              </tr>
            </thead>

            <tbody className="text-center">
            {orders.map(order => (
                <tr key={order._id}>
                  <td>{formatDate(order.createdAt)}</td>
                  <td>{order.userId.fullname}</td>
                  <td>{order.userId.phone}</td>
                  <td>{order.userId.address}</td>
                  <td>{order.status}</td>
                  
                  <td>{formatCurrency(order.totalAmount) + " ₫"}</td>
                  <td>{order.paymentMethod}</td>
                  <td>
                    <i className="edit">
                      <Eye
                        style={{
                          color: "blue",
                          fontSize: "25px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleOrderDetail(order._id)}
                      />
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {visible && (
        <OrderDetailAdmin
          visible={visible}
          setVisible={setVisible}
          order={selectedOrder}
        />
      )}
    </Container>
    );
};

export default Cancel;
