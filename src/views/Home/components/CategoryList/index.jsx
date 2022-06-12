import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "../../../../redux/actions/products";
import CategoryItem from "../../../../components/CategoryItem";
import SkeletonCategory from "../../../../components/CategoryItem/components/SkeletonCategory";
import "./index.scss";
const CategoryList = () => {
  const { isLoading, categories } = useSelector(
    ({ categoryReducer }) => categoryReducer
  );

  const dispatch = useDispatch();
  const [active, setActive] = useState("All categories");

  const handleClick = (item) => {
    setActive(item);
    dispatch(getAllProductsByCategory(item));
  };

  if (isLoading) {
    return (
      <div className="category-list">
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
      </div>
    );
  }

  return (
    <div className="category-list">
      <CategoryItem
        item="All categories"
        handleClick={handleClick}
        active={active}
      />
      {categories?.map((item) => {
        return (
          <CategoryItem item={item} handleClick={handleClick} active={active} />
        );
      })}
    </div>
  );
};
export default CategoryList;
