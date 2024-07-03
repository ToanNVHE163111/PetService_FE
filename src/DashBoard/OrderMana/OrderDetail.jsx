import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import axios from "axios";

const OrderDetail = (props) => {
  const { visible, setVisible, order } = props;
  const [cancelReason, setCancelReason] = useState("");
  const [isCanceling, setIsCanceling] = useState(false);

  const onHide = () => {
    setVisible(false);
  };

  const calculateTotal = () => {
    let total = 0;
    order.items.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const handleCancelOrder = async () => {
    try {
      await axios.put(`http://localhost:9999/payment/${order._id}/cancel`, {
        cancelReason,
      });
      alert("Đơn hàng đã được hủy thành công");
      window.location.reload(); // Tải lại trang để cập nhật trạng thái đơn hàng
    } catch (error) {
      console.error(error);
      alert("Lỗi khi hủy đơn hàng");
    }
  };

  const dialogFooter = (
    <div>
      <div
        style={{ display: "flex", justifyContent: "start", marginTop: "5px" }}
      >
        <h5>Total: {formatCurrency(calculateTotal()) + " ₫"} </h5>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        {!isCanceling  ? (
          <Button
            onClick={() => setIsCanceling(true)}
            className="btn btn-danger mr-2"
            disabled={order.status === "Completed" || order.status === "Cancel" || order.paymentMethod === "VnPay"}
          >
            Huỷ đơn hàng
          </Button>
        ) : (
          <>
            <Form.Control
              as="select"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              style={{ marginRight: "10px", width: "200px" }}
            >
              <option value="">Chọn lý do</option>
              <option value="Đổi ý">Đổi ý</option>
              <option value="Tìm thấy giá rẻ hơn">Tìm thấy giá rẻ hơn</option>
              <option value="Khác">Khác</option>
            </Form.Control>
            <Button
              onClick={handleCancelOrder}
              className="btn btn-danger mr-2"
              disabled={!cancelReason} // Vô hiệu hóa nút nếu chưa chọn lý do
            >
              Xác nhận huỷ
            </Button>
            <Button
              onClick={() => setIsCanceling(false)}
              className="btn btn-secondary mr-2"
            >
              Đóng
            </Button>
          </>
        )}
        <Button onClick={onHide} className="btn btn-danger">
          Đóng
        </Button>
      </div>
    </div>
  );

  function formatCurrency(number) {
    if (typeof number === "number") {
      return number.toLocaleString("en-US", {
        currency: "VND",
      });
    }
  }

  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Chi tiết đơn hàng</div>}
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <form id="addProductForm">
              <Row>
                <Col className="text-center ">
                  <div className="table-responsive">
                    <table
                      className="table table-condensed"
                      style={{ height: "100px" }}
                    >
                      <thead>
                        <tr>
                          <th style={{ width: "15%" }}>Name</th>
                          <th style={{ width: "25%" }}>Quantity</th>
                          <th style={{ width: "20%" }}>Price</th>
                          <th style={{ width: "20%" }}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.map((item) => (
                          <tr key={item.productId._id}>
                            <td style={{ verticalAlign: "middle" }}>
                              {item.productId.name}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {item.quantity}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {formatCurrency(item.price) + " ₫"}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {formatCurrency(item.quantity * item.price) +
                                " ₫"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default OrderDetail;
