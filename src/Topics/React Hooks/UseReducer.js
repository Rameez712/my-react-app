import React from "react";
import { useState,useReducer } from "react";

//const [count,setCount] = useState(0); 
const initialState ={
    count:0,
    eror:null
}

//--The reducer function takes two arguments: 
//--the current state and an action object, 
//--and returns a new state based on the action type.
const reducer = (state,action)=>{
    switch(action.type){
        case "increment":
            return{count: state.count  }
        case "decrement":
            return{count:state.count-action.payload}
        case "multiply":
            return{count:state.count*action.payload}

        default:
            return state
    }

}
  
function UseReducerComponent(){
    //--The useReducer hook takes two arguments: 
    //--a reducer function and an initialState object.

    //--The useReducer hook returns an array with 2 elements: 
    //--the current state and a dispatch function that is used to update 
    //--the state based on the action type.
    const[state,dispatch]= useReducer(reducer,initialState)

    return(
        <div>
            Count:{state.count}
            <button onClick={()=>dispatch({type:"increment",payload:1})}>+</button>
            <button onClick={()=>dispatch({type:"decrement",payload:1})}>-</button>
            <button onClick={()=>dispatch({type:"multiply",payload:2})}>*</button>
           
        </div>
    )
}

export default UseReducerComponent;