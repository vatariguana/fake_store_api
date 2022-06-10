import React from "react";
import "./index.scss";
const CategoryItem = (props) => {
  const { item } = props;

  return (
    <div className="container-category">
      <p>{item}</p>
    </div>
  );
};
export default CategoryItem;
