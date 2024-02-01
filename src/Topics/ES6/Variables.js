import React from 'react';
//-- All the three can be declared globally or locally.
//-- var has a function scope, not a block scope.
//-- let has a block scope.
//-- const has a block scope, but it is immutable.


function ClickCounter() {

  //--let example to show that let has a block scope.
  // let letCounter = 0; 
  // letCounter++; 
  {
    let letCounter = 0; 
    letCounter++; 
  }

  //--Var example to show that var has a function scope, not a block scope.
  function incrementVarCounter() {
    var varCounter = 0; 
    varCounter++; 
  }
  // {
  //   var varCounter = 0; 
  //   varCounter++; 
  // }

  incrementVarCounter(); // Call the incrementVarCounter function

  //--const example to show it is immutable.
  const constCounter = 0; // Declare a constant constCounter and initialize it to 0
  // constCounter++; // Uncommenting this line will result in an error

  return (
    <div>
      {/* <p>var Counter: {varCounter}</p>  */}
      {/* This line will result in a reference error, since varCounter is not accessible here */}
      {/* <p>let Counter: {letCounter}</p> */}
      {/* This line will result in a reference error, since letCounter is not accessible here */}
      <p>const Counter: {constCounter}</p>
    </div>
  );
}

export default ClickCounter; // Export the ClickCounter component as the default export