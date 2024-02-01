import React from "react";
import { useRef,useState,useEffect } from "react";




// function UseRefComponent() {
//     const refVal = useRef();

//     const onButtonClick = ()=>{
//         alert(refVal.current.value);
//     }
//   return <div>
//     <label> Input
//     <input type="text" ref={refVal} ></input>
//     </label>
//     <button onClick={onButtonClick}>Button</button>
//   </div>;
// }

//  export  default UseRefComponent;

//--Tracking State Changes
///--first write only state and show its change
//-- then add ref and show
// function UseRefComponent(){
//   const [inputVal, setInputVal] = useState("");
//   const ref = useRef();

//       useEffect(()=>{
//           ref.current = inputVal;
//       })

//   return(
//     <div>
//       <input  value={inputVal} onChange={(e)=>setInputVal(e.target.value)}></input>
//       <br/>
//       State val:{inputVal}
//       <br/>
//       Ref val:{ref.current}
//     </div>
//   )
// }



// export  default UseRefComponent;



// //--Does Not Cause Re-renders
///input field will be used in case of useRefExample also, for redering the comp ONLY
function UseRefComponent() {
  const [inputValue, setInputValue] = useState("");
  const[stateCount,setStateCount] = useState(0);
  const ref = useRef(0);

  // const[stateCount,setStateCount] = useState(0);

//--remember ,, we will not keep dependency in thi case because on change event will
//--not work bring the code to use effect because it would need dependency then
  useEffect(() => {
    ref.current = ref.current + 1;

    //--Same code with state object.
    //--below code will not even require input onchange event because
    //--state will cause re-render
  // setStateCount(stateCount+1);

  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)
        }
      />
       <h1>Render Count: {ref.current}</h1>
      <h1>Render Count: {stateCount}</h1>
    </>
  );
}

export  default UseRefComponent;
