import React, { useState, useCallback,memo } from "react";

const UseCallback2Component = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const increment2 = useCallback(() => {
    console.log("inside increment2")
    setCount2((c) => c + 1);
  },[count2]);



  return (
    <div>

      <div>
      increment1: {count}
        <button onClick={increment}>+</button>
      </div>

      <div>
        {/* Count: {count}
        <button onClick={increment}>+</button> */}
        <Increment2 increment2={increment2}  />
      </div>


    </div>
  );
};

const Increment2 =memo(({increment2})=>{
console.log("inside 2nd component render");
return(
  <div>
    increment2: 
    <button onClick={increment2}>+</button>

  </div>
)

});


export default UseCallback2Component;
