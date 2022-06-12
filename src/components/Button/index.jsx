import React from "react";
import "./index.scss";

const Button = (props) => {
  const { onClick, text, icon, isDisabled, className } = props;
  return (
    <div className="button-container">
      <button onClick={onClick} disabled={isDisabled} className={className}>
        {text}
        {icon}
      </button>
    </div>
  );
};

export default Button;
