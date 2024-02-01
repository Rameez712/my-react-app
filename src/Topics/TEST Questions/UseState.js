import React, { useState } from 'react';

const TEST = () => {
  const [count, setCount] = useState(0);

  console.log("Inside component")

  const increment = () => {
    setCount(count + 1);
  };

  const clickHere = () => {
    console.log("clickFunc");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={clickHere}>clickHere</button>
    </div>
  );
};

export default TEST;


//--Explain the purpose of useState.
//--Describe the role of count and setCount.
//--Write code to initialize a state object with integer value 0

//Answer the following questions for the program above.
//--Modify the code to initialize count to a different starting value.
//--What will the output of console if user click Increment Button?and why?
//--What will the output of console if user click the click Button?and why?
//--Add a second state variable and update the component to use it.



