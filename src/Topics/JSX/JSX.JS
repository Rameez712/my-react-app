// 1. Basic JSX Syntax:
// In a React functional component, you use JSX to describe what you want to render. JSX looks similar to HTML but has the power of JavaScript embedded within it.

// jsx
// Copy code
// Import React
import React from 'react';

// Define a functional component using JSX
const MyComponent = () => {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a simple React functional component.</p>
    </div>
  );
};

// Export the component
export default MyComponent;
// In the example above, MyComponent is a functional component that returns JSX. The JSX code looks like HTML, but it's actually JavaScript under the hood.

// 2. Embedding Expressions in JSX:
// You can embed JavaScript expressions within curly braces {} in JSX.

const name = 'John';

const Greeting = () => {
  return <p>Hello, {name}!</p>;
};
//Here, {name} is a JavaScript expression that evaluates to the value of the name variable.

// 3. JSX Attributes:
// You can use JSX attributes to pass data to your components.


const MyLink = () => {
  const url = 'https://www.example.com';

  return <a href={url}>Visit Example</a>;
};
// In this example, the href attribute is assigned the value of the url variable.

// 4. React Components in JSX:
// You can use React components within JSX.

const SubComponent = () => {
  return <p>This is a subcomponent.</p>;
};

const ParentComponent = () => {
  return (
    <div>
      <h2>Main Component</h2>
      <SubComponent />
    </div>
  );
};
// Here, SubComponent is used within the ParentComponent JSX.

// 5. Handling Events in JSX:
// Events in JSX are similar to HTML, but use camelCase.

const ButtonComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
};
// 6. Conditional Rendering:
// You can use JavaScript expressions for conditional rendering in JSX.

const ConditionalComponent = ({ isLoggedIn }) => {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
};
// 7. Styling in JSX:
// Styling in JSX can be done using inline styles.


const StyledComponent = () => {
  const divStyle = {
    color: 'blue',
    fontSize: '20px',
  };

  return <div style={divStyle}>Styled text</div>;
};


// MAPPING


import React from 'react';

class ListComponent extends React.Component {
  render() {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
      <>
        <h2>List of Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}