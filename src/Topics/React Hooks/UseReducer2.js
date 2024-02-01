// import React, { useReducer } from "react";

// const initialState ={
//     count:0
// }

// const reducer =(state,action)=>{

//     switch (action.type){
//         case "increment":
//             return{count:state.count+1}
//         case "decrement":
//             return{count:state.count-1}
//     }
// }

// function UseReducer(){

//     const [state,dispatch]= useReducer(reducer,initialState)

//     return(
//         <div>
//             Count:{state.count}
//             <br/>
//             <button onClick={()=>dispatch({type:"increment"})}>increment</button>
//             <br/>
//             <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
//         </div>
//     )
// }

// export default UseReducer;


// import React, { useState } from "react";

// function UseReducer(){
// const [count,setCount]= useState(0);

//     const increment = ()=>{
//         setCount((prevCount)=> prevCount+1);
//     }
//     const decrement = ()=>{
//         setCount((prevCount)=> prevCount-1);
//     }

    
//     return(
//         <div>
//             Count:{count}
//             <br/>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>

//         </div>
//     )
// }

// export default UseReducer;