import React, { useReducer } from 'react'

export default function UseReducer() {
    let initialState = {count:0};
    const [state,dispatch] = useReducer(counterReducer,initialState);
    function counterReducer(state,action)
    {
        switch (action.type) {
            case 'increment':
                return {count : state.count+1}
            case 'decrement':
                return {count : state.count-1}
        
            default:
                break;
        }
    }
  return (
    <div>
      <h2>{state.count}</h2>
      <button className='btn btn-primary' onClick={()=>dispatch({type : 'increment'})}>increment</button>
      <button className='btn btn-primary mx-2' onClick={()=>dispatch({type : 'decrement'})}>decrement</button>
    </div>
  )
}
