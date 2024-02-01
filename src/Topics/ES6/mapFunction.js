import React from 'react';

function ItemList() {
  const items = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cherry' },
  ];

  //const getStringArray= ['apple', 'banana', 'cherry'];
  

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* String array example */}
      {/* <ul>
        {getStringArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default ItemList;