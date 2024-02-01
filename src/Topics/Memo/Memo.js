import React, { useState, memo } from 'react';

///--Component named Counter
const Counter = () => {
  console.log('Counter Component');
};

///--Component named Render (commented this because it is wothout param, so doesnot define any utility)
// const Render = memo(() => {
//     console.log('Render Component');
   
//   });



function MemoComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount = () => {
    setCount2(count2+1);
  };

  console.log('Memo Component');

  return (
    <div>
      Count:{count}
      <br/>
      Count2:{count2}
      <br/>
      <button onClick={incrementCount}>Increment</button>
      <Counter count={count} />
      {/* <Render  /> */}
    </div>
  );
}

export default MemoComponent;