import React,{createContext,useState} from "react";

const DarkModeContext = createContext()

const DarkModeProvider = (props) => {
  const[darkMode,setDarkMode] = useState(true)
  function toggleDarkMode(){
    setDarkMode(!darkMode)
  }
  return(
    <>
      <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  )
}

export {DarkModeContext, DarkModeProvider}