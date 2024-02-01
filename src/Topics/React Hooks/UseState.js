import React, { useState } from 'react';

const UseState = () => {
    // Destructuring the array returned by useState
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };



//   const UseState = () => {
//     const [count, setCount] = useState(0);
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
//       </div>
//     );
//   };
  

export default UseState;