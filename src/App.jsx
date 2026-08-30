import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from "./components/Login"
import Notification from './components/Notification'
import Dashboard from './components/Dashboard'

function App() {
  return (
  <>

  <Routes>
    <Route path='/' element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>

    </>
  )
}

export default App
