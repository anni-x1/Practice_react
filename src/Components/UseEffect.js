import React, { useState } from 'react'

export default function UseEffect() {
    const [count,setCount] = useState(0)

    React.useEffect(() => {
        alert(`You clicked ${count} times`)
        return () => {
            alert('Bye')
        }
    })
  return (
    <div>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">{count}</button>
    </div>
  )
}
