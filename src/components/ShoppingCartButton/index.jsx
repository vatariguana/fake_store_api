import React from "react";
import { useNavigate } from "react-router-dom";
import Badget from "../Badget";
import Button from "../Button";
import "./index.scss";

const ShoppingCartButton = () => {
  const history = useNavigate();
  const shoppingCartCount = JSON.parse(
    localStorage.getItem("shoppingCart")
  )?.length;
  return (
    <div className="shopping-cart-button">
      <Button
        onClick={() => history("/cartList")}
        text=""
        icon={<i className="fab fa-opencart" />}
      />
      <Badget>{shoppingCartCount}</Badget>
    </div>
  );
};

export default ShoppingCartButton;
