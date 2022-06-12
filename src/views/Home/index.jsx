import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/products";
import { getAllCategories } from "../../redux/actions/categories";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import "./index.scss";
import ShoppingCartButton from "../../components/ShoppingCartButton";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    //eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <ShoppingCartButton />
      <div className="container-categories">
        <CategoryList />
      </div>
      <div className="container-product">
        <ProductList />
      </div>
    </div>
  );
};
export default Home;
