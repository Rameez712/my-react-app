import React, { useState }  from "react";
import PropsChild from './propsChild'

function PropsParent(){
const [count,setCount]= useState(4);
const object = {aa:"ss",bb:"jj"}

const testFunc=()=>{
    alert("hi")
}

    return(
        <>
        <PropsChild myProp={testFunc}/>
        </>
    )
}

export default PropsParent;