import React, { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const handleIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setCount(0);
  };

  return (
    <div>
      <h1>Functional Counter</h1>
      <h3>Counter: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default FunctionalCounter;
