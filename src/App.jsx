import { Routes, Route } from "react-router-dom"

import './App.css'
import Login from "./components/Login"
import Dashboard from './components/Modules/Dashboard'
import Navigation from "./components/Navigation"
import SignUp from "./components/SignUp"
import Layout from './components/Layout'
import Notification from "./components/Notification/Notification"
import MobileLogin from "./components/Modules/Login/MobileLogin"
import Profile from "./components/Modules/Profile"
import AccountInformation from "./components/AccountInformation"
import Listing from "./components/Modules/Listing"
import UserManagement from "./components/Modules/UserManagement";
import ApprovalListing from "./components/Modules/ApprovalListing"

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
