import react, { useCallback, useState,useMemo } from 'react'
import TEST2 from './TEST2';

function TEST(){
  const[count,setCount] = useState(0);
  const[count2,setCount2] = useState(0);

  const increment = ()=>{
      setCount(count+1);
  }

  return(
    <div>
  
        Count:{count}
        <br/>
        <button onClick={increment}>increment</button>
        <br/>
        <TEST2 count={count}/>

    </div>
  )
}


export default TEST;