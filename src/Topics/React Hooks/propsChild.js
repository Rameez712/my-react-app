import React from "react";


function PropsChild({myProp}){


    return(
        <>
        Props:{myProp.aa}
        <button onClick={myProp}>testFunc</button>
        </>
    )
}

export default PropsChild;