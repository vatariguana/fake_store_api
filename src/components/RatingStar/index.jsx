import React from "react";
import "./index.scss";
const RatingStar = (props) => {
  const { rate, count, disabled } = props;
  let starComp = [];

  const isFloat = (num) => {
    return Number(num) === num && num % 1 !== 0;
  };

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      if (isFloat(rate)) {
        const rest = rate - i;
        if (rest < 1) {
          starComp.push("fas fa-star-half-alt");
        } else {
          starComp.push("fas fa-star");
        }
      } else {
        starComp.push("fas fa-star");
      }
    } else if (i > rate) {
      starComp.push("far fa-star");
    }
  }

  return (
    <div
      className={`rating-star-container ${disabled ? "disabled" : "active"}`}
    >
      {starComp.map((item) => {
        return <i className={item} />;
      })}
      ({count || 0})
    </div>
  );
};

export default RatingStar;
