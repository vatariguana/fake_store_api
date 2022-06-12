import React from "react";
import "./index.scss";

const Badget = (props) => {
  const { children } = props;
  return <div className="badget">{children}</div>;
};

export default Badget;
