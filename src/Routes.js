import React from "react";
import { Routes, Route } from "react-router-dom";
import CartList from "./components/CartList";
import Buy from "./views/Buy";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cartlist" element={<CartList />} />
      <Route path="/cartlist/buy" element={<Buy />} />
    </Routes>
  );
};

export default RoutesApp;
