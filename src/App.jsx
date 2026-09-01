import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from "./components/Login"
import Notification from './components/Notification'
import Dashboard from './components/Dashboard'
import Navigation from "./components/Navigation"

function App() {
  return (
  <>

  <div className="flex h-screen">
    <div className="flex-1 p-6 bg-gray-50 overflow-auto">
      <Routes>
        <Route path='/' element={<Navigation />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 
    </div>
</div>
    </>
  )
}

export default App
