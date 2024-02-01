import React from "react";

function comp (){
const name = "Rameez";
    return(
        <div>
            <span>
                {/* Hi {name} */}
                <Childcomp/>
            </span>
            
        </div>
    )

}


function Childcomp (){
    const name2 = "Rameez2";
        return(
            <div>
                <span>
                    Hi {name2}
                </span>
            </div>
        )
    
    }
export default comp;