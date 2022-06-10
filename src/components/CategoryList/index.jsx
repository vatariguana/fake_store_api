import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem";
import "./index.scss";
const CategoryList = () => {
  const { categories } = useSelector(({ categoryReducer }) => categoryReducer);
  return (
    <div className="category-list">
      {categories?.map((item) => {
        return <CategoryItem item={item} />;
      })}
    </div>
  );
};
export default CategoryList;
