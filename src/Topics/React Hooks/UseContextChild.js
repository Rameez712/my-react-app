import React, { useContext } from "react";
import GlobalContext  from "./TEST";

function UseContextChild(){
const {user} = useContext(GlobalContext);
    return(
        <>
        User:
        {user}
        {/* <button onClick={userFunc}></button> */}
        </>
    )
}

 export default UseContextChild;





// import React, { useContext } from "react";
// import UserContext from "./CreateContext";

// function UseContextChild(){
// const {userName,changeName} = useContext(UserContext);

//     return(
//         <>
//         Name: {userName}
//         <br/>
//         <br/>

//         <button onClick={changeName}>Change name to Rameez</button>
//         </>
//     );
// }

// export default UseContextChild;