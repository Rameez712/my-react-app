import React, { useState, useEffect } from 'react';

function CalculationExample() {
  const [inputNumber, setInputNumber] = useState(5);
  const [squareResult, setSquareResult] = useState(null);
  const [doubleResult, setDoubleResult] = useState(null);
  const [tripleResult, setTripleResult] = useState(null);

  useEffect(() => {
    const calculateSquare = (number) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = Math.pow(number, 2);
          resolve(result);
        }, 1000);
      });
    };

    const calculateDouble = (squareResult) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = squareResult * 2;
          resolve(result);
        }, 1000);
      });
    };

    const calculateTriple = (doubleResult) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = doubleResult * 3;
          resolve(result);
        }, 1000);
      });
    };

    const performCalculations = async () => {
      try {
        const squareResult = await calculateSquare(inputNumber);
        setSquareResult(squareResult);

        const doubleResult = await calculateDouble(squareResult);
        setDoubleResult(doubleResult);

        const tripleResult = await calculateTriple(doubleResult);
        setTripleResult(tripleResult);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    performCalculations();
  }, [inputNumber]);

  return (
    <div>
      <h1>Calculation Example</h1>
      <p>Input Number: {inputNumber}</p>
      <p>Square Result: {squareResult}</p>
      <p>Double Result: {doubleResult}</p>
      <p>Triple Result: {tripleResult}</p>
    </div>
  );
}

export default CalculationExample;
