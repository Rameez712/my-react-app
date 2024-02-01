
import React, { useState } from "react";

function TernaryOperatorExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Ternary Operator Example</h1>
      <button onClick={toggleLoginStatus}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default TernaryOperatorExample;







