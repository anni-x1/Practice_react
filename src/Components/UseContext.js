import React, { useContext } from 'react';
import  {MyContext}  from '../App'; // Import MyContext from the App component

export default function UseContext() {
  const mooda = useContext(MyContext);
  return (
    <div>
      <p>Hello</p>
      <p>{mooda}</p>
    </div>
  );
}