import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductItem from "../ProductItem";
import "./index.scss";
const ProductList = () => {
  const { products } = useSelector(({ productReducer }) => productReducer);
  const history = useNavigate();

  return (
    <div className="product-list">
      {products?.map((item) => {
        return <ProductItem item={item} history={history} />;
      })}
    </div>
  );
};
export default ProductList;
