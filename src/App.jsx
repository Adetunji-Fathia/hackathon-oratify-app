import { useState } from 'react'
import Landing from './Pages/Landing'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Onboarding from './Pages/Onboarding'
import Complete from './Pages/Complete'
import Dashboard from './Pages/Dashboard'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/onboarding'
         element={<Onboarding/>} />
        <Route path='/complete'
         element={<Complete/>} />
        <Route path='/dashboard'
         element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
