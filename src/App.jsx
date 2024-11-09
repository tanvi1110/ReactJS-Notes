
import { useEffect, useState } from 'react'
import './App.css'
import ColorBG from './components/ColorBG';
import PasswordGenerator from './components/PasswordGenerator';
import CurrencyConverter from './components/CurrencyConverter';
import Header from './components/RouterProject/Header/Header';
import Footer from './components/RouterProject/Footer/Footer';
import Home from './components/RouterProject/Home/Home';
import UserContextProvider from './Context/UserContextProvider';
import Login from './components/ContextProject/Login';
import Profile from './components/ContextProject/Profile';
import { ThemeProvider } from './Context2/theme';
import ThemeBtn from './components/ThemeProject/ThemeBtn';
import Card from './components/ThemeProject/Card';

function App() {
  const [counter, setCounter] = useState(15)


  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
     setThemeMode("light")
  } 
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <>
      {/* <button className='mb-5 pl-10 pr-10 p-4 rounded bg-slate-700 ' onClick={addValue} >
    Add Value: {counter}
   </button>
   <button className='pl-10 pr-10 p-4 rounded bg-red-600 ' onClick={removeValue} >
    Remove Value:  {counter}
   </button> */}
      {/* <ColorBG /> */}
      {/* <PasswordGenerator /> */}
      {/* <CurrencyConverter /> */}
      {/*    
   4. Context discussion project password and username lena dena
   <UserContextProvider>
     <h1>Tanvi Login Page</h1>
     <Login />
     <Profile />
   </UserContextProvider>  */}

      {/* 5. theme switcher */}

      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
