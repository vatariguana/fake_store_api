import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductItem from "../../../../components/ProductItem";
import SkeletonProduct from "../../../../components/ProductItem/components/SkeletonProduct";
import "./index.scss";
const ProductList = () => {
  const { isLoading, products } = useSelector(
    ({ productReducer }) => productReducer
  );
  const history = useNavigate();

  if (isLoading) {
    return (
      <div className="product-list">
        <SkeletonProduct />
        <SkeletonProduct />
        <SkeletonProduct />
        <SkeletonProduct />
        <SkeletonProduct />
        <SkeletonProduct />
      </div>
    );
  }

  return (
    <div className="product-list">
      {products?.map((item) => {
        return <ProductItem item={item} history={history} />;
      })}
    </div>
  );
};
export default ProductList;
