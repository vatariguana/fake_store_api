import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const BackButton = (props) => {
  const { url } = props;
  const history = useNavigate();

  const handleBack = () => {
    history(url);
  };

  return (
    <div className="back" onClick={handleBack}>
      <span>🠔</span> Back
    </div>
  );
};

export default BackButton;
