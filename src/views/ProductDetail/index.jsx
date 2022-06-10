import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Counter from "../../components/Counter";
import { getProductDetail } from "../../redux/actions/products";
import "./index.scss";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const productId = location.pathname.split("/")[2];
  const { productDetail } = useSelector(({ productReducer }) => productReducer);
  useEffect(() => {
    dispatch(getProductDetail(productId));
  }, []);
  const handleBack = () => {
    history("/");
  };
  return (
    <div className="product-detail">
      <div className="back" onClick={handleBack}>
        <span>🠔</span> Back
      </div>
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
            <Counter />
          </div>
          <button>Add to Shopping cart</button>
          <hr className="divider"></hr>
          <div className="description-detail">{productDetail?.description}</div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
