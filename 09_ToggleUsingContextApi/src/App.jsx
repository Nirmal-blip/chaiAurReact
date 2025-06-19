
import {useState,useEffect,React} from 'react';
import Card from './components/card';
import ThemeBtn from './components/ThemeBtn';
import { ThemeProvider } from './contexts/theme';
function App() {
  

const [themeMode,setThemeMode] = useState("light"); // or "dark"

//yeh automatically humare themeProvider ke lightTheme() ko update karega jab bhi hum isko change karenge
const lightTheme = () => {
    setThemeMode("light");
  };

//ye bhi automatically humare themeProvide ke darkTheme() ko update karega jab bhi hum isko change karenge
const darkTheme = () => {
    setThemeMode("dark");
  };


  //actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}} >  
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
</ThemeProvider>
    </>
  )
}

export default App
