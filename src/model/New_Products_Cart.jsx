import React from 'react';
const New_Products_Cart = ({ img, obj, name, price }) => {
    return (
        <div
      className="cards flex-column"
      style={{ width: "18rem", height: "28rem", marginRight: "10px" }}
    >
      <div>
        <img
          src={img}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            alignItems: "center",
          }}
        ></img>
      </div>
      <div>
        <i className="text-secondary">{obj}</i>
      </div>
      <div>
        <p className="text-center mt-1 font-weight-bolder">
          {name}
        </p>
      </div>
      <div>
        <h4 className="text-primary">
        {price} <span className="align-text-bottom">đ</span>
        </h4>
      </div>
    </div>
    );
};

export default New_Products_Cart;