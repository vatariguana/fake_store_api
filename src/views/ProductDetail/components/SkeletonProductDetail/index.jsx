import React from "react";
import RatingStar from "../../../../components/RatingStar";
import "./index.scss";
const SkeletonProductDetail = () => {
  return (
    <div className="skeleton-product-detail-container">
      <div className="skeleton-product-detail image" />
      <div>
        <div className="skeleton-product-detail category" />
        <div className="skeleton-product-detail title" />
        <div>
          <RatingStar rate={1} disabled />
        </div>
        <div className="skeleton-product-detail price" />
        <div className="skeleton-product-detail counter" />
        <div className="button" />
      </div>
    </div>
  );
};

export default SkeletonProductDetail;
