import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getShoppingCart } from "../../redux/actions/shoppingCart";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import "./index.scss";

const CartList = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { cart } = useSelector(
    ({ shoppingCartReducer }) => shoppingCartReducer
  );
  useEffect(() => {
    dispatch(getShoppingCart());
    //eslint-disable-next-line
  }, []);

  const headers = [
    {
      label: "Imagen",
      key: "image",
    },
    {
      label: "Title",
      key: "title",
    },
    {
      label: "Category",
      key: "category",
    },
    {
      label: "Amount",
      key: "amount",
    },
    {
      label: "Price",
      key: "price",
    },
    {
      label: "Sub total",
      key: "subTotal",
    },
  ];

  const optHeader = [
    {
      label: "Actions",
      key: "delete",
    },
  ];

  const allHeaders = [...headers, ...optHeader];

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart?.length; i++) {
      total += cart[i].subTotal;
    }
    return total.toFixed(2);
  };

  const total = getTotal();

  const handleBuy = () => {
    history("/cartList/buy");
  };

  const handleDeleteItem = (productId) => {
    const allProducts = JSON.parse(localStorage.getItem("shoppingCart"));

    const updatedLocalStorage = allProducts.filter((item) => {
      return item.id !== productId;
    });
    localStorage.setItem("shoppingCart", JSON.stringify(updatedLocalStorage));
    dispatch(getShoppingCart());
  };

  return (
    <div className="cart-list-container">
      <BackButton url="/" />
      <div className="cart-list">
        <table className="table">
          <thead className="thead-container">
            <tr className="header">
              {allHeaders?.map((element, index) => {
                return (
                  <th className="th-header" key={`th-${index}`}>
                    {element.label}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="tbody-container">
            {cart?.length === 0 ? (
              <tr>
                <td colspan={7}>Carrito vacio</td>
              </tr>
            ) : (
              cart?.map((elemento) => {
                return (
                  <tr className="tr-body">
                    {headers.map((item) => {
                      const keyValue = item.key;
                      if (elemento[keyValue]) {
                        if (keyValue === "image") {
                          return (
                            <td className="td-image">
                              <img src={elemento[keyValue]} alt="product-img" />
                            </td>
                          );
                        }
                        return (
                          <td className="td-text">{elemento[keyValue]}</td>
                        );
                      }
                    })}
                    <td className="td-text">
                      <div onClick={() => handleDeleteItem(elemento.id)}>
                        <i className="fas fa-trash-alt" />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}

            {cart?.length !== 0 && (
              <tr className="billing">
                <td colspan={5}>Total:</td>
                <td>${total}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="buy-button">
        <Button
          onClick={handleBuy}
          text="Comprar ahora"
          isDisabled={cart?.length === 0}
          className={cart?.length === 0 ? "disabled" : ""}
        />
      </div>
    </div>
  );
};

export default CartList;
