import React from "react";
const Products_Card = ({ img, obj, name, price }) => {
  return (
    <div
      className="cards flex-column"
      style={{ width: "18rem", height: "28rem", marginRight: "10px" }}
    >
      <div>
        <img
          src={img}
          style={{
            width: "250px",
            height: "270px",
            alignItems: "center",
          }}
        ></img>
      </div>
      <div>
        <i className="text-secondary">{obj}</i>
      </div>
      <div>
        <p className="text-center mt-1 font-weight-bolder">{name}</p>
      </div>
      <div>
        <h4 className="text-primary">
          {price} <span className="align-text-bottom">đ</span>
        </h4>
      </div>
    </div>
  );
};

export default Products_Card;
