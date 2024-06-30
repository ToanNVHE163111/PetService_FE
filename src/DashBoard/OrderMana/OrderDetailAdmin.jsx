import { Dialog } from "primereact/dialog";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const OrderDetailAdmin = (props) => {
  const { visible, setVisible, order } = props;

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
  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    order.items.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };
  const dialogFooter = (
    <div>
      <div
        style={{ display: "flex", justifyContent: "start", marginTop: "5px" }}
      >
        <h5>Total: {formatCurrency(calculateTotal()) +" ₫"} </h5>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={onHide} className="btn btn-danger">
          <X style={{ fontSize: "22px" }} />
          Close
        </Button>
      </div>
    </div>
  );
  function formatCurrency(number) {
    // Sử dụng hàm toLocaleString() để định dạng số thành chuỗi với ngăn cách hàng nghìn và mặc định là USD.
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
          <h4 className="text-center">Thông tin chi tiết Khách hàng</h4>
          <div style={{ margin: "40px" }}>
            <Row>
              <Col md={6}>
                <div className="form-group w-full">
                  <label className="label" >
                    <h6>Tên khách hàng</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={order.userId.fullname}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group w-full">
                  <label className="label" >
                    <h6>Số điện thoại</h6>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={order.userId.phone}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                {" "}
                <div className="form-group w-full">
                  <label className="label" >
                    <h6>Địa chỉ</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={order.userId.address}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group w-full">
                  <label className="label" >
                    <h6>Tổng số lượng đơn hàng</h6>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={calculateTotalQuantity()}
                    style={{ height: "50px" }}
                    required
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <h4 className="text-center">Thông tin chi tiết đơn hàng</h4>
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
                              {formatCurrency(item.price) +" ₫"}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {formatCurrency(item.quantity * item.price) +" ₫"}
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

export default OrderDetailAdmin;
