import React  from "react";
import { createContext } from "react";

const GlobalContext =createContext({
    userName:null,
    userFunc:()=>{}
});

export default GlobalContext;