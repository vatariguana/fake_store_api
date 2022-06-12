import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const BackButton = () => {
  const history = useNavigate();

  const handleBack = () => {
    history("/");
  };

  return (
    <div className="back" onClick={handleBack}>
      <span>🠔</span> Back
    </div>
  );
};

export default BackButton;
