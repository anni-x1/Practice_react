import React from 'react'
// import UseEffect from './Components/UseEffect'
// import UseContext from './Components/UseContext'
// import UseRef from './Components/UseRef'
// import UseReducer from './Components/UseReducer'
import CustomHook from './Components/CustomHook'
const mood = {
  'happy': '😊',
  'sad': '😢',
  'angry': '😡',
  'excited': '🤩'
}
export const MyContext = React.createContext(mood)
export default function App() {
  return (
    <>
      {/* <UseEffect/> */}
     {/* <MyContext.Provider value={mood.happy}> */}
       {/* <UseContext /> */}
     {/* </MyContext.Provider> */}
     {/* <UseRef/> */}
     {/* <UseReducer/> */}
     
    </>
  )
}