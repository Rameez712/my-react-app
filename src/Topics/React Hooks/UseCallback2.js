import React, { useState, useCallback } from "react";

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const increment2 = () => {
    console.log("render");
    setCount2((c) => c + 1);
  };

  return (
    <div>
      <div>
        Count: {count}
        <button onClick={increment}>increment</button>
      </div>
      <div>
        Count2: {count2}
        <button onClick={increment2}>increment2</button>
      </div>
    
    </div>
  );
};



export default UseCallbackComponent;
