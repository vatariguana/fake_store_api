import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import "./index.scss";
const ProductList = () => {
  const { products } = useSelector(({ productReducer }) => productReducer);

  return (
    <div className="product-list">
      {products?.map((item) => {
        return <ProductItem item={item} />;
      })}
    </div>
  );
};
export default ProductList;
