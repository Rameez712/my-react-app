import React from 'react';

function Vehicle({ type2, color, brand, model,year2 }) {
  const message = `My ${type2} is a ${color} ${brand} ${model}  ${year2}.`;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}


const vehicleOne = 
    {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red'
    }
;

const vehicleTwo = 
    {
        type2: 'car2',
        year2: 2022, 
        color2: 'yellow2'
    }
 ;      

const myUpdatedVehicle = {...vehicleOne, ...vehicleTwo};

function App(){
    return(
        <div>
            <Vehicle {...myUpdatedVehicle}/>
        </div>
    );
}

export default App; 