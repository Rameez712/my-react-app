import React from 'react';
import PropTypes from 'prop-types';

function PropTypesComp({ name, age, isStudent }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}

PropTypesComp.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool
};

export default PropTypesComp;
