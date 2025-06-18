import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'


function App() {


const myObj={
  name: "nirmal",
  age: 22,
}

const myArray = [1, 2, 3, 4, 5];  
  return (

    <>
<h1 className="bg-green-400 text-transparent bg-clip-text "> TAILWIND TEST </h1>
 <Card username="Nirmal" someObj={myObj} btnText="visit me"  />

    </>
  )
}

export default App
