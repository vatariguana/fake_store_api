import React from "react";
import "./index.scss";
const ProductItem = (props) => {
  const { item } = props;

  return (
    <div className="container-item">
      <div className="item-image">
        <img src={item?.image} alt="product" />
      </div>
      <div className="item-category">
        <p>{item?.category}</p>
      </div>
      <div className="item-title">
        <p className="truncate">{item?.title}</p>
      </div>
      <div className="item-price">
        <p>${item.price}</p>
      </div>
    </div>
  );
};
export default ProductItem;
