import React, { useState, useCallback } from 'react';

const UseCallBack = () => {
  const [count, setCount] = useState(0);

  // Increment function wrapped with useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array includes 'count'

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseCallBack;
