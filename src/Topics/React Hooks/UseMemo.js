import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  //const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const increment2 = () => {
    setCount2((r) => r + 1);
  };

  return (
    <div>
      
     
      <div>
      <h2>increment</h2>
        Count1: {count}
        <button onClick={increment}>Increment count1</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <hr />
      <div>
        <h2>increment2</h2>
        <p>count2: {count2}</p>
        <button onClick={increment2}>Increment count2</button>
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

export default UseMemo;
