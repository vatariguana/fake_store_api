import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Buy from "./views/Buy";
import CartList from "./views/CartList";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";

const RoutesApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/cartlist/buy" element={<Buy />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
