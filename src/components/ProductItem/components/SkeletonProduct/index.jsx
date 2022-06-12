import React from "react";
import "./index.scss";
const SkeletonProduct = () => {
  return (
    <div className="skeleton-product-container">
      <div className="skeleton-product image" />
      <div className="skeleton-product category" />
      <div className="skeleton-product title" />
      <div className="skeleton-product price" />
      <div className="skeleton-product shoppingCart" />
    </div>
  );
};

export default SkeletonProduct;
