import { Routes, Route } from "react-router-dom"

import './App.css'
import Login from "./components/Login"
import Dashboard from './components/Dashboard'
import Navigation from "./components/Navigation"
import SignUp from "./components/SignUp"
import Layout from './components/Layout'
import Notification from "./components/Notification"
import MobileLogin from "./components/MobileLogin"
import Profile from "./components/Profile"
import AccountInformation from "./components/AccountInformation"
import Listing from "./components/Listing"
import UserManagement from "./components/UserManagement";
import ApprovalListing from "./components/ApprovalListing"

function App() {
 return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/AddProduct" element={<Listing />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/approval" element={<ApprovalListing />} />
      </Route>
    </Routes>
  )

}

export default App
