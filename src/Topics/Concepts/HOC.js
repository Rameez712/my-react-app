import React, { useState, useEffect } from 'react';

// Higher Order Component
const withLoading = (WrappedComponent) => {
  return function WithLoading(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate data fetching delay (e.g., API call)
    //   const fetchData = async () => {
    //     try {
    //       // Simulating API call delay
    //       await new Promise((resolve) => setTimeout(resolve, 2000));
           setIsLoading(false);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    //   fetchData();
    }, []);

    return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
  };
};

// Example Component
const MyComponent = ({ data }) => (
  <div>
    <h1>Data Loaded Successfully!</h1>
    <p>{data}</p>
  </div>
);

// Wrap MyComponent with the withLoading HOC
const MyComponentWithLoading = withLoading(MyComponent);

// App Component
const HOC = () => (
  <div>
    <h1>Higher Order Component Example</h1>
    <MyComponentWithLoading data="Hello, HOC!" />
  </div>
);

export default HOC;
