import { useState } from 'react'
import Landing from './Pages/Landing'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Onboarding from './Pages/Onboarding'
import './App.css'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  

  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/onboarding' element={<Onboarding/>} />
      </Routes>
    </>
  )
}

export default App
