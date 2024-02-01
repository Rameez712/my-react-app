import React, { useState } from 'react';
import GlobalContext from './CreateContext';
import TEST2 from './TEST2';

function UseContextComponent(){
const[user,setUser] = useState("Mark");

const changeName = ()=>{

  setUser("Mark 2");
}

return(
  <div>
      <GlobalContext.Provider value={{userName:user,userFunc:changeName}}>

      <TEST2 />

      </GlobalContext.Provider>

  </div>
)

}

export default UseContextComponent;