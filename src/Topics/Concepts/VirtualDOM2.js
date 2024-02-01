import React, { useState } from 'react';

const DropdownExample = () => {
  const [selectedValue, setSelectedValue] = useState('Option 1');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <p>Selected: {selectedValue}</p>
    </div>
  );
};

export default DropdownExample;
