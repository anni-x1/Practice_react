import React, { useRef } from 'react'

export default function UseRef() {
    const [count,setCount] = React.useState(0);
    const btnclick = useRef(null);
    const clickIt = ()=> {
        // btnclick.current.focus()
        btnclick.current.click()
    }
  return (
    <div>
      <button onClick={clickIt} >LFG</button>
      {/* <input ref={btnclick} type="text" /> */}
      <button ref={btnclick} onClick={() =>setCount(count+1)} className="btn btn-primary">Click{count}</button>
    </div>
  )
}
