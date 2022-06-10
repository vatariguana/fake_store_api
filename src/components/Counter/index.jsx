import React, { useState } from "react";
import "./index.scss";
const Counter = () => {
  const [counter, setCounter] = useState(1);
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
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
