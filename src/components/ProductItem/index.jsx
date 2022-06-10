import React from "react";
import { Link } from "react-router-dom";
import ShopCart from "../../assets/images/shopcart.png";
import "./index.scss";
const ProductItem = (props) => {
  const { item, history } = props;

  const handleAddShopcart = (e) => {
    e.stopPropagation();
    console.log("agregar a carrito", item);
  };

  const handleDetail = () => {
    history(`/products/${item.id}`);
  };

  return (
    <div className="container-item" onClick={handleDetail}>
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
        <div onClick={handleAddShopcart}>
          <img src={ShopCart} alt="Shopcart" />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
