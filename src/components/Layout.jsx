import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}