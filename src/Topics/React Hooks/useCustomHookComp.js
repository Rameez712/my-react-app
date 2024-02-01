import React from "react";
import { useState,useEffect } from "react";
 import useFetch from "./customHooks";

const UseCustomHookComp = () => {

   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

return(
    <>
       { data.map((resp)=> {return <p key={resp.id}>{resp.i}d</p>})}
    </>
)

} 




// const UseCustomHookComp = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };


export default UseCustomHookComp;