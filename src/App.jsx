import { Routes, Route } from "react-router-dom"

import './App.css'
import Login from "./components/Login"
import Dashboard from './components/Dashboard'
import Navigation from "./components/Navigation"
import Layout from './components/Layout'
import Notification from "./components/Notification"

function App() {
 return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Notification />} />
        <Route path="/cart" element={<Dashboard />} />
        <Route path="/profile" element={<Dashboard />} />
      </Route>
    </Routes>
  )

}

export default App
