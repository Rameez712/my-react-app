import react from 'react';
function Event(){

    
const onClickWithoutParam =()=>{
    alert("Great Click");
}

const onClickWithParam =(param)=>{
    alert("Great Click"+param);
}


return(
    <div>
        <button style={{height:'60px',width:'60px'}} onClick={()=>onClickWithParam("Rameez")}>With Param</button>
        <br/>  <br/>
        <button style={{height:'60px',width:'60px'}} onClick={onClickWithoutParam}>Without Param</button>
            
    </div>
)
}


export default Event;
