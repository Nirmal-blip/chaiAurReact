import { useState } from 'react'

import './App.css'

function App() {

//hooks hai yeh useState(pehla variable or doosra ho gay setState function easy hai yrr...)
const[counter,nirmalCounter]=useState(0);

const add=()=>{
  console.log('add function called');
  nirmalCounter(counter+1);
  
}
const remove=()=>{
  if(counter===0){
    console.log('Counter cannot be less than 0');
    return;
  }
  else{
  nirmalCounter(counter-1);
  console.log('remove function called');}
}
  return (
    <>
     <h1> Chai aur react</h1>
     <h2>counter value:{counter}</h2>
     <div style={{display: 'flex',justifyContent:'center', gap: '10px'}}>
     <button onClick={add}>Add value</button>
      <button onClick={remove}>remove value</button></div>
    </>
  )
}

export default App
