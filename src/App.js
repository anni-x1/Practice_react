import React,{useState} from "react";
import ThemeContext from "./Context/ThemeContext";
import ThemeButton from "./Components/ThemeButton";
import UseMemo from "./Components/UseMemo";
// import  UseCallback from "./Components/UseCallback";
// import UseReducer from "./Components/UseReducer";
// import Forms from "./Components/Forms"
// import UseState from "./Components/UseState";
// import UseEffect from "./Components/UseEffect";


export default function App()
{
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme)=>
      prevTheme === 'light' ? 'dark' : 'light');
  };
  return(
    <ThemeContext.Provider  value={theme}>
      <h2>Hey Anni!</h2>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <Forms/> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeButton/>
      {/* <UseReducer/> */}
      {/* <UseCallback/> */}
      <UseMemo/>
    </ThemeContext.Provider>
  )
}