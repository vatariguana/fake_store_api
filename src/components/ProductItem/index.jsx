import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addShoppingCart,
  resetProcess,
} from "../../redux/actions/shoppingCart";
import Toast from "../Toast";
import "./index.scss";

const ProductItem = (props) => {
  const { item, history } = props;
  const dispatch = useDispatch();
  const [toast, setToast] = useState(false);

  const { success } = useSelector(
    ({ shoppingCartReducer }) => shoppingCartReducer
  );

  useEffect(() => {
    if (success) {
      dispatch(resetProcess());
    }
    //eslint-disable-next-line
  }, [success]);

  const handleDetail = () => {
    history(`/products/${item.id}`);
  };

  const handleAddShoppingCart = (e) => {
    e.stopPropagation();

    item.amount = 1;
    item.subTotal = 1 * item.price;
    dispatch(addShoppingCart(item));
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);
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
        <p>${item?.price}</p>
        <div onClick={(e) => handleAddShoppingCart(e)}>
          <i className="fab fa-opencart" />
        </div>
      </div>
      <Toast
        title="Producto agregado al carrito de compras"
        isVisible={toast}
      />
    </div>
  );
};
export default ProductItem;
