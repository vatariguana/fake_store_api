import React from "react";
import "./index.scss";
const Counter = (props) => {
  const { handleIncrement, handleDecrement, counter } = props;
  return (
    <div className="counter-container">
      <button
        className="decrement"
        onClick={handleDecrement}
        disabled={counter === 1}
      >
        -
      </button>
      <div className="counter">{counter}</div>
      <button className="increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
export default Counter;
