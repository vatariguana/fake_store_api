import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { getAllProducts } from "../../redux/actions/products";
import { getAllCategories } from "../../redux/actions/categories";
import CategoryList from "../../components/CategoryList";
import ShopCart from "../../assets/images/shopcart.png";
import "./index.scss";
import Button from "../../components/Button";

const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  return (
    <div className="home">
      <div className="shopping-cart-button">
        <Button
          onClick={() => history("/cartList")}
          text="Shopping Cart"
          icon={<img width={32} src={ShopCart} alt="Shopcart" />}
        />
      </div>
      <div className="container-categories">
        <CategoryList />
      </div>
      <div className="container-product">
        <ProductList />
      </div>
      <div className="footer">footer aqui</div>
    </div>
  );
};
export default Home;
