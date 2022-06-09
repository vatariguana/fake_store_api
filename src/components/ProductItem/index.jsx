import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/Actions";
import "./index.scss";
const ProductItem = () => {
  const dispatch = useDispatch();
  const { productsAll } = useSelector(({ AllProducts }) => AllProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  //   console.log(productsAll, "info del reducer");
  return (
    <div className="productItem">
      {productsAll?.map((item) => {
        return (
          <div className="container-items">
            <div className="item">
              <img className="item-image" src={item?.image} alt="product"></img>
            </div>
            <div className="item">
              <label>{item?.category}</label>
            </div>
            <div className="item">
              <label>{item?.title}</label>
            </div>
            <div className="item">
              <label>US ${item.price}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductItem;
