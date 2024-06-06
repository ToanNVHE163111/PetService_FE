import { Dialog } from "primereact/dialog";
import { Button, Col, Row } from "react-bootstrap";
import { Trash, WalletFill, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { visible, setVisible } = props;

  const onHide = () => {
    setVisible(false);
  };
  const handleCheckout = () => {
    setVisible(false);
  };

  const dialogFooter = (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <h5>Total: </h5>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Link to={"/payment"}>
          <Button className="btn btn-success mr-2" onClick={handleCheckout}>
            <WalletFill
              style={{ fontSize: "22px", color: "white", marginRight: "7px" }}
            />
            Check Out
          </Button>
        </Link>
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
          <div className="custom-dialog-header" style={{ textAlign: "center", marginTop:'20px' }}>
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
                      <tr>
                        <td style={{ display: "flex", textAlign: "center" }}>
                          <img
                            src="/"
                            alt="image"
                            style={{
                              width: "100px",
                              height: "auto",
                              verticalAlign: "middle",
                            }}
                          />
                        </td>
                        <td style={{ verticalAlign: "middle" }}>name</td>
                        <td style={{ verticalAlign: "middle" }}>2</td>
                        <td style={{ verticalAlign: "middle" }}>
                          <input
                            type="number"
                            min="1"
                            style={{ width: "50px", height:'30px' }}
                            value="aaa"
                          />
                        </td>
                        <td style={{ verticalAlign: "middle" }}>Pet</td>
                        <td style={{ verticalAlign: "middle" }}>34</td>
                        <td style={{ verticalAlign: "middle" }}>
                          <Trash
                            style={{
                              color: "red",
                              fontSize: "25px",
                              cursor: "pointer",
                            }}
                          />
                        </td>
                      </tr>
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
