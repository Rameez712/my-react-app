import React from "react";  

const employeeData = [
    {name:"Rameez",age:25,designation:"Software Engineer"},
    {name:"Rohit",age:26,designation:"Software Engineer"},
    {name:"Rahul",age:27,designation:"Software Engineer"},
]

const filterFunc =()=>{
   return employeeData.filter((employee)=> employee.age>25)
}

function EmployeeList(){
return (<div>
  { filterFunc().map((employee)=>
    <h1 >{employee.name}</h1>
   )} 
   
</div>);
}

export default EmployeeList;