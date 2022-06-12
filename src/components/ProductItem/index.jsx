import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopCart from "../../assets/images/shopcart.png";
import {
  addShoppingCart,
  resetProcess,
} from "../../redux/actions/shoppingCart";
import "./index.scss";

const ProductItem = (props) => {
  const { item, history } = props;
  const dispatch = useDispatch();

  const { success } = useSelector(
    ({ shoppingCartReducer }) => shoppingCartReducer
  );

  useEffect(() => {
    if (success) {
      // alert("agregado al carrito");
      dispatch(resetProcess());
      history("/cartList");
    }
  }, [success]);

  const handleDetail = () => {
    history(`/products/${item.id}`);
  };

  const handleAddShoppingCart = (e) => {
    e.stopPropagation();

    item.amount = 1;
    item.subTotal = 1 * item.price;
    dispatch(addShoppingCart(item));
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
          <img src={ShopCart} alt="Shopcart" />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
