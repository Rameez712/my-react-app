import React, { useContext } from "react";
import GlobalContext  from "./CreateContext";

function UseContextChild2(){
    const {userName,userFunc} = useContext(GlobalContext);
    return(
        <>
        User2:
        {userName}
        <br/>
        <button onClick={userFunc}>Click</button>
        </>
    )
}

 export default UseContextChild2;