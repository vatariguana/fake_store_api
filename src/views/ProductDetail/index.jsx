import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Counter from "../../components/Counter";
import { getProductDetail } from "../../redux/actions/products";
import {
  addShoppingCart,
  resetProcess,
} from "../../redux/actions/shoppingCart";
import "./index.scss";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const productId = location.pathname.split("/")[2];

  const { productDetail } = useSelector(({ productReducer }) => productReducer);
  const { success } = useSelector(
    ({ shoppingCartReducer }) => shoppingCartReducer
  );
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    dispatch(getProductDetail(productId));
  }, []);
  useEffect(() => {
    if (success) {
      alert("agregado al carrito");
      dispatch(resetProcess());
      history("/");
    }
  }, [success]);

  const handleAddShoppingCart = () => {
    productDetail.amount = counter;
    productDetail.subTotal = counter * productDetail.price;

    dispatch(addShoppingCart(productDetail));
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="product-detail">
      <BackButton url="/" />
      <div className="product-detail-container">
        <div className="image-detail">
          <img src={productDetail?.image} alt="product" />
        </div>
        <div className="container-items">
          <div className="category-detail">{productDetail?.category}</div>
          <div className="title-detail">{productDetail?.title}</div>
          <div className="rating-container">
            <div className="rating-detail">
              {productDetail?.rating?.count} {productDetail?.rating?.rate}
            </div>
          </div>
          <div className="price-detail">${productDetail?.price}</div>
          <div>
            <Counter
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              counter={counter}
            />
          </div>
          <div className="add-shopping-cart" onClick={handleAddShoppingCart}>
            Add to Shopping cart
          </div>
          <hr className="divider"></hr>
          <div className="description-detail">{productDetail?.description}</div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
