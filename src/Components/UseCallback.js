import React, { useState, useCallback } from 'react';

// Child component
const Child = ({ onButtonClick }) => {
  console.log('Child rendered');
  return <button onClick={onButtonClick}>Click me</button>;
};

// Parent component
const Parent = () => {
  const [count, setCount] = useState(0);

  // useCallback ensures handleClick is only recreated when `count` changes
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array means this function does not change

  console.log('Parent rendered');

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onButtonClick={handleClick} />
    </div>
  );
};

export default Parent;
