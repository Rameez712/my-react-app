import React, { useState } from 'react';

function NonPrimitiveReRenderingExample() {
  // Initialize the user state with an object
  const [user, setUser] = useState({ name: 'John', age: 30 });
console.log("re-render")
  const handleChangeWithoutSpread = () => {

    user.name = 'Alice';
    console.log(user.name)

    setUser(user);
  };

  const handleChangeWithSpread = () => {

    const newUser = { ...user, name: 'Bob',age:33 };
    setUser(newUser);
  };

  return (
    <div>
      <h2>Re-rendering Example</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleChangeWithoutSpread}>
        Change Name (Without Spread)
      </button>
      <button onClick={handleChangeWithSpread}>
        Change Name (With Spread)
      </button>
    </div>
  );
}

export default NonPrimitiveReRenderingExample;
