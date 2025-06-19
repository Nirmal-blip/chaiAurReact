import { useState } from 'react'
import ContextProvider from './context/contextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {


  return (
    <ContextProvider>
     <Login/>
    <Profile/>
    </ContextProvider>
  )
}

export default App
