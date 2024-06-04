import React from 'react';
import images from "../assets/images/product.png";
const New_Products_Cart = ({ img, obj, des, price }) => {
    return (
        <div
      className="cards flex-column"
      style={{ width: "18rem", height: "28rem", marginRight: "10px" }}
    >
      <div>
        <img
          src={images}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            alignItems: "center",
          }}
        ></img>
      </div>
      <div>
        <i className="text-secondary">{obj}Cho mèo</i>
      </div>
      <div>
        <p className="text-center mt-1 font-weight-bolder">
          {des}Cát vệ sinh mix than hoạt tính LAPAW cho mèo mùi Chanh túi
          15L/8kg
        </p>
      </div>
      <div>
        <h4 className="text-primary">
          100000 <span className="align-text-bottom">đ</span>
        </h4>
      </div>
    </div>
    );
};

export default New_Products_Cart;