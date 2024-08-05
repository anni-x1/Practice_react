import React, { useState } from "react";

export default function UseState() {
  const [counter, setcounter] = useState(12)
  const handleClick = () => { setcounter(counter + 1) }
  return (
    <>
      <h2>Use State</h2>
      <button type="button" onClick={handleClick}>{counter}</button>
    </>
  )
}