import React, { useState, useEffect } from 'react';

const TEST = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('Effect ran!');
  });

  return (
    <div>
      <p>Count: {count1}</p>
      <p><button onClick={() => setCount1(count1 + 1)}> Increment1 </button></p>

      <p>Count2: {count2}</p>
      <p><button onClick={() => setCount2(count2 + 1)}>Increment2</button></p>
    </div>
  );
};

export default TEST;

//--Explain the purpose of useEffect 
//--What are its different types




//Answer the following questions for the program above.
///--Q1. If the Increment1 button is clicked twice, what will be the console's output on each click?
///-- 1. Without Empty Dependency 
///-- 2. With Empty Dependency
///-- 3. With Dependency as count1

///--Q2. If the Increment1 button is clicked twice, what will be the console's output on each click?
///--1. With Dependency as count1
