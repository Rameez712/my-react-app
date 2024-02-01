import {React,memo}  from "react";
import { useContext } from "react";
import GlobalContext from './CreateContext'

function TEST2(props) {
  const {userName} = useContext(GlobalContext);

  return (
    <>
      <h1>Component TEST</h1>
      <h2>{`Hello ${userName} again!`}</h2>
    </>
  );
};

export default TEST2;