import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  // Memoized squared value of count
  const squaredValue = useMemo(() => {
    console.log("Calculating  value...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <p>Squared Value: {squaredValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseMemo;
