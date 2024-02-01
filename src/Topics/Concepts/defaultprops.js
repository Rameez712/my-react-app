import {React,memo}  from "react";

function TEST2(props) {
  console.log("Inside TEST2");

  const { count } = props;

  return (
    <div>
      ChildCount: {count == undefined ? count : TEST2.defaultProps.count}
    </div>
  );
}

export  default TEST2;
TEST2.defaultProps={
  count:'Guest'
};