import { FaShoppingCart, FaBox, FaUser } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navigation() {
  return (
    <div className="bg-[green] w-16 sm:w-56 transition-all duration-300 ease-in-out h-screen flex flex-col py-10 shrink-0">
      <img src={Logo} alt="Logo" className="w-15 h-15 sm:w-30 sm:h-30 mx-auto" />
      <nav className="flex flex-col text-white text-sm sm:text-base px-4 sm:px-6 gap-4">

        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/Dashboard">
          <MdOutlineDashboardCustomize className="text-xl shrink-0" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>

        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/Orders">
          <FaBox className="text-xl shrink-0" />
          <span className="hidden sm:inline">Orders</span>
        </Link>

        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/Cart">
          <FaShoppingCart className="text-xl shrink-0" />
          <span className="hidden sm:inline">Cart</span>
        </Link>

        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/Profile">
          <FaUser className="text-xl shrink-0" />
          <span className="hidden sm:inline">Profile</span>
        </Link>

      </nav>
    </div>
  );
}