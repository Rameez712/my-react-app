import React, { useState } from "react";

const [count,setCount] = useState(0);

const incremFunc = ()=>{

    count - count +1;
}

function Counter(){
    return(
        <div>
            <button onClick={incremFunc}>Increment</button>
            
        </div>
    );
}