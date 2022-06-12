import React from "react";
import "./index.scss";
const InputForm = (props) => {
  const { label, name, type, value, handleChange, isRequired } = props;
  return (
    <div className="input-form">
      <label form={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        required={isRequired}
      />
    </div>
  );
};

export default InputForm;
