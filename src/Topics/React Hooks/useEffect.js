import React, { useState, useEffect } from 'react';

const TEST = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('UseEffect');
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