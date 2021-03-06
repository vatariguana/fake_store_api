import React from "react";
import "./index.scss";
const CategoryItem = (props) => {
  const { item, handleClick, active } = props;
  return (
    <div onClick={() => handleClick(item)} className="container-category ">
      <p className={`${item === active ? "active" : ""}`}>{item}</p>
    </div>
  );
};
export default CategoryItem;
