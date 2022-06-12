import React from "react";
import "./index.scss";
const Toast = (props) => {
  const { title, isVisible, status = "success" } = props;
  return (
    <div className={`toast-wrapper ${isVisible ? "visible" : "hidden"}`}>
      <div class={`toast ${status}`}>
        <div className="toast-title">{title}</div>
      </div>
    </div>
  );
};

export default Toast;
