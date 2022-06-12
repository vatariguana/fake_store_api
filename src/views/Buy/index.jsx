import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm";
import BackButton from "../../components/BackButton";
import "./index.scss";
import Toast from "../../components/Toast";

const Buy = () => {
  const history = useNavigate();
  const [formStates, setFormStates] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });
  const [toast, setToast] = useState({
    title: "",
    toast: false,
  });

  const validatePhoneNumber = (key, value) => {
    if (key === "phone" && isNaN(value)) {
      setToast({
        title: "Debe ser un numero",
        isVisible: true,
        status: "error",
      });
      setTimeout(() => {
        setToast({
          title: "",
          isVisible: false,
        });
      }, 1000);
      return false;
    }
    return true;
  };

  const handleChange = (e, key) => {
    const value = e.target.value;
    const isValidInputForm = validatePhoneNumber(key, value);

    if (isValidInputForm) {
      setFormStates({
        ...formStates,
        [key]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("shoppingCart");
    setToast({
      title: "Compra realizada con exito",
      isVisible: true,
      status: "success",
    });

    setTimeout(() => {
      setToast({
        title: "",
        isVisible: true,
      });
      history("/");
    }, 2000);
  };
  return (
    <div className="buy-container">
      <BackButton url="/cartList" />
      <h2>Para Continuar con la compra complete los siguientes campos:</h2>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Nombre"
          name="name"
          type="text"
          value={formStates.name}
          handleChange={(e) => handleChange(e, "name")}
          isRequired
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          value={formStates.email}
          handleChange={(e) => handleChange(e, "email")}
          isRequired
        />

        <InputForm
          label="Direccion"
          name="address"
          type="text"
          value={formStates.address}
          handleChange={(e) => handleChange(e, "address")}
          isRequired
        />
        <InputForm
          label="Ciudad"
          name="city"
          type="text"
          value={formStates.city}
          handleChange={(e) => handleChange(e, "city")}
          isRequired
        />

        <InputForm
          label="Telefono"
          name="phone"
          type="phone"
          value={formStates.phone}
          handleChange={(e) => handleChange(e, "phone")}
          isRequired
        />

        <button type="submit">Finalizar compra</button>
      </form>

      <Toast
        status={toast.status}
        title={toast.title}
        isVisible={toast.isVisible}
      />
    </div>
  );
};

export default Buy;
