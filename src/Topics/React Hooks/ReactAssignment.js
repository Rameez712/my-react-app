// // Counter App:
// // Create a simple counter app.
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;


// Input Field:
// Create a simple input field that updates a message as you type.

// import React, { useState } from "react";

// function InputField() {
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={message} onChange={handleChange} />
//       <p>You typed: {message}</p>
//     </div>
//   );
// }

// export default InputField;


// export default ToggleMessage;



// //--Toggle Message:
// //--Create a component that allows you to toggle the visibility of a message using the useState hook.
// import React, { useState } from "react";

// function ToggleMessage() {
//   const [isMessageVisible, setMessageVisibility] = useState(false);

//   const toggleVisibility = () => {
//     setMessageVisibility(!isMessageVisible);
//   };

//   return (
//     <div>
//       <button onClick={toggleVisibility}>
//         Toggle Message
//       </button>
//       {isMessageVisible && <p>This is a hidden message.</p>}
//     </div>
//   );
// }

// export default ToggleMessage;

// export default ToggleSwitch;

// ------------------------------------------------------------------------------------

// USEEFFECT

//--Data Fetcher
//-- fETCH Data from "https://jsonplaceholder.typicode.com/todos" and display it on 
//-- Ul li list element
// import React, { useState, useEffect } from "react";

// function DataFetcher() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data when the selectedOption changes
//     fetch(`https://jsonplaceholder.typicode.com/todos`)
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DataFetcher;


//--Program to :-
//-- increase count by 1 on click of a button 
//-- as the above count increases use it as depdendency in useEffect to increase another 
//-- state object by *2
//-- Display it on screen

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

//----RealTimeClock 
//-- display time dynamically
//-- u can use set interval function to update it after every 1 sec

// function RealTimeClock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {

//     setInterval(() => {
//       setTime(new Date());
//     }, 1000);


//   }, []);

//   return (
//     <div>
//       <h1>Real-Time Clock:</h1>
//       <p>Current time: {time.toLocaleTimeString()}</p>
//     </div>
//   );
// }

// export default RealTimeClock;


// ---------------------------------------------------------------------------

//--Testing passing of props


// import React from "react";


// function ParentComponent() {
//   const greeting = "Hello from Parent Component";
//   const age = 30;

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <p>Greeting: {greeting}</p>
//       <p>Age: {age}</p>
//       <ChildComponent greeting={greeting} age={age} />
//     </div>
//   );
// }

// export default ParentComponent;

// function ChildComponent(props) {
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>Greeting from Parent: {props.greeting}</p>
//       <p>Age from Parent: {props.age}</p>
//     </div>
//   );
// }

