import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ number }) => {
  // Expensive calculation
  const computeFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  // Use useMemo to avoid recalculating unless `number` changes
  const factorial = useMemo(() => computeFactorial(number), [number]);

  return <div>Factorial of {number} is {factorial}</div>;
};

const ParentComponent = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(Number(e.target.value))} 
      />
      <ExpensiveComponent number={number} />
    </div>
  );
};

export default ParentComponent;
