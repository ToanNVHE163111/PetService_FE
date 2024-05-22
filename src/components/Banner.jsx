import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "../assets/images/1.png";
const Banner = () => {
  return (
    <div className="d-flex justify-content-around container p-0">
      <Col md={6} className="d-flex align-items-center p-0 ">
        <div>
          <div className="d-flex flex-column ">
            <h4>PET SERVICE</h4>
            <h1 className="shadow-sm p-3 mb-5 bg-white rounded">
              DỊCH VỤ THÚ CƯNG
            </h1>
            <h1>TẠI NHÀ</h1>
            <h2>
              <b>UY TÍN HÀNG ĐẦU</b> TẠI THÀNH PHỐ HÀ NỘI
            </h2>
          </div>
          <div className="d-flex align-items-center ">
            <Link
              to="/online-booking"
              className="btn btn-white  align-items-center rounded-pill mr-3 border border-3 border-primary text-primary  "
            >
              <span className="font-weight-bolder">XEM THÊM </span>
            </Link>
            <Link
              to="/online-booking"
              className="btn btn-white  align-items-center rounded-pill mr-3 border border-3 border-primary text-primary  "
            >
              <span className="font-weight-bolder">Online Booking</span>
            </Link>
          </div>
        </div>
      </Col>
      <Col md={6}>
        <div className="d-flex justify-content-center">
          <img src={images} style={{ maxWidth: "450px", height: "auto" }}></img>
        </div>
      </Col>
    </div>
  );
};

export default Banner;
