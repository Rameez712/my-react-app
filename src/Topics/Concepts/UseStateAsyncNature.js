import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);


 const Increment = ()=>{
    setCount((prevcount)=>prevcount+1)

    console.log(count); 
 }


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default Counter;


// When you click the "Increment" button, the setCount function is called with a callback that increments the previous count value. However, the console.log(count) statement that follows the state update does not log the immediately updated value of count. Instead, it logs the current state value, which has not been updated yet.

// Here's the sequence of events:

// You click the "Increment" button.
// setCount is called with the callback to increment the previous count value.
// React schedules a state update but does not immediately update the count.
// The console.log(count) statement is executed, logging the current (not updated) state value.
// The component re-renders, and the UI is updated with the new count value.