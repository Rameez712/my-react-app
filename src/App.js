

const users = [{
  firstname:"Rohit",
  lastname:"Kumar"
}];


const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;


//--simple  function
function formatName(user){
  return user.firstname + ' ' + user.lastname;
}

//--function with if 
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

//--function with if else
function userFunc(user) {
  if (user.firstname === "Rohit") {
    user.firstname = "Rameez";
  } else {
    user.firstname = "Sameer";
  }
  return <li>{user.firstname}</li>;
} 

function App()   {
  return (
    <div >
     <ul>
      {users.map((user)=>
      //-- userFunc return without curly braces
        userFunc(user)

      //-- userFunc return with curly braces
      //-- { return  userFunc(user)}
      )}
     </ul>
    </div>

    
  );
}

export default App;
