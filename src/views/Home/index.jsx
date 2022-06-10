import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../../components/ProductList";
import { getAllProducts } from "../../redux/actions/products";
import { getAllCategories } from "../../redux/actions/categories";
import "./index.scss";
import CategoryList from "../../components/CategoryList";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  return (
    <div className="home">
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
