import React, { useReducer } from 'react'

export default function UseReducer() {
    let initial = {count:0}
    const [state,dispatch] = useReducer(areduce,initial)
    function areduce(state,action){
        switch (action.type) {
            case 'increment':
                return {count : state.count + 1}
            case 'decrement':
                return {count : state.count - 1}
        
            default:
                break;
        }
    }
  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={()=> dispatch({type : 'increment'})}>increment</button>
      <button onClick={()=> dispatch({type : 'decrement'})}>decrement</button>
    </>
  )
}
