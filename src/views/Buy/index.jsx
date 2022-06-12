import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Modal from "../../components/Modal";
import "./index.scss";

const Buy = () => {
  const [formStates, setFormStates] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  const handleChange = (e, key) => {
    const value = e.target.value;
    setFormStates({
      ...formStates,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    console.log("borrar localstorage");
    localStorage.removeItem("shoppingCart");
  };
  return (
    <div className="buy-container">
      <h2>Para Continuar con la compra complete los siguientes campos:</h2>
      <form>
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

        <label class="btn" for="modal-1" onClick={handleSubmit}>
          Finalizar compra
        </label>
      </form>
      <Modal>
        <h1>Compra Finalizada</h1>
        <p className="title">Datos del comprador</p>
        <p>
          <span>Nombre: </span>
          {formStates.name}
        </p>
        <p>
          <span>Email: </span>
          {formStates.email}
        </p>
        <p>
          <span>Direccion: </span>
          {formStates.address}
        </p>
        <p>
          <span>Ciudad: </span>
          {formStates.city}
        </p>
        <p>
          <span>Telefono: </span>
          {formStates.phone}
        </p>
      </Modal>
    </div>
  );
};

export default Buy;
