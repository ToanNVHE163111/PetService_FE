import axios from "axios";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Trash, WalletFill, X } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = (props) => {
  const { visible, setVisible } = props;
  const [listCart, setListCart] = useState([]);
  const user = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9999/cart/${user}`)
      .then((res) => {
        const mergedCart = [];
        const fetchedCart = res.data;

        fetchedCart.forEach((item) => {
          const existingItemIndex = mergedCart.findIndex(
            (cartItem) => cartItem.productId._id === item.productId._id
          );

          if (existingItemIndex > -1) {
            mergedCart[existingItemIndex].quantity += item.quantity;
          } else {
            mergedCart.push(item);
          }
        });
        setListCart(mergedCart);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [user]);

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete" + productId + "?")) {
      axios
        .delete("http://localhost:9999/cart/" + productId)
        .then(() => {
          toast.success("Cart updated successfully");
          setListCart(listCart.filter((t) => t.productId._id !== productId));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const onHide = () => {
    setVisible(false);
  };
  const handleCheckout = () => {
    navigate("/checkout", { state: { listCart } });
    setVisible(false);
  };
  const calculateTotal = () => {
    let total = 0;
    listCart.forEach((c) => {
      total += c.quantity * c.productId.price;
    });
    return total;
  };
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...listCart];
    updatedCart[index].quantity = newQuantity;
    setListCart(updatedCart);
  };
  const dialogFooter = (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <h5>Total: {calculateTotal()} </h5>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button className="btn btn-success mr-2" onClick={handleCheckout}>
          <WalletFill
            style={{ fontSize: "22px", color: "white", marginRight: "7px" }}
          />
          Check Out
        </Button>
        <Button onClick={onHide} className="btn btn-danger">
          <X style={{ fontSize: "22px" }} />
          Close
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Dialog
        visible={visible}
        onHide={onHide}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={
          <div
            className="custom-dialog-header"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <h4> Cart Shop</h4>
          </div>
        }
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <Row>
              <Col className="text-center ">
                <div className="table-responsive">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th style={{ width: "15%" }}>Image</th>
                        <th style={{ width: "25%" }}>Product</th>
                        <th style={{ width: "20%" }}>Price</th>
                        <th style={{ width: "15%" }}>Quantity</th>
                        <th style={{ width: "15%" }}>Category</th>
                        <th style={{ width: "25%" }}>Total</th>
                        <th style={{ width: "25%" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listCart.map((c, index) => (
                        <tr key={c._id}>
                          <td style={{ display: "flex", textAlign: "center" }}>
                            <img
                              src={c.productId.image[0]}
                              alt="image"
                              style={{
                                width: "100px",
                                height: "auto",
                                verticalAlign: "middle",
                              }}
                            />
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {c.productId.name}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {c.productId.price}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <input
                              type="number"
                              min="1"
                              style={{ width: "70px", height: "30px" }}
                              value={c.quantity}
                              onChange={(e) =>
                                updateQuantity(index, parseInt(e.target.value))
                              }
                            />
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {c.categoryId.name}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {c.quantity * c.productId.price}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <Trash
                              style={{
                                color: "red",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleDelete(c.productId._id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Cart;
