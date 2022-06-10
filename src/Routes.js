import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      {/* <Route path="/shoppingcart" element={<ShoppingCart />} /> */}
    </Routes>
  );
};

export default RoutesApp;
