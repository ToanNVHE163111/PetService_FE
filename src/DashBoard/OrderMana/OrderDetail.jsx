import { Dialog } from "primereact/dialog";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const OrderDetail = (props) => {
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
  const dialogFooter = (
    <div>
      <div
        style={{ display: "flex", justifyContent: "start", marginTop: "5px" }}
      >
        <h5>Total: {calculateTotal()} </h5>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={onHide} className="btn btn-danger">
          <X style={{ fontSize: "22px" }} />
          Close
        </Button>
      </div>
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Order Detail</div>}
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
                          <th style={{ width: "15%" }}>Order ID</th>
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
                              {item.productId._id}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {item.productId.name}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {item.quantity}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {item.price}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {item.quantity * item.price}
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
