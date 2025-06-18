import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/Home'
import User from './components/User'
import Github from './components/Github'
import { BrowserRouter, Routes, Route } from "react-router";
function App() {

  return (
    <>
    <BrowserRouter>
     <Header/>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path='user/:userid' element={<User/>}/>
   <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/github" element={<Github/>}/>
   </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
