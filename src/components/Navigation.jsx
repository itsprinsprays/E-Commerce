import { FaUser } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineReport  } from "react-icons/md";
import { FaUsers, FaPlus  } from "react-icons/fa6";
import { PiSignOutFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navigation() {
  return (
    <div className="bg-[green] w-16 sm:w-56 transition-all duration-300 ease-in-out h-screen flex flex-col py-10  shrink-0">
      <img src={Logo} alt="Logo" className="w-15 h-15 sm:w-30 sm:h-30 mx-auto" />

      <div className="h-10 px-2 py-3 m-5 border items-center flex flex-row rounded bg-white text-black gap-2 hidden sm:flex">
          <CiSearch className="text-gray-400 text-xl shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-35"
            />
      </div>

      
      <nav className="flex flex-col text-white text-sm sm:text-base px-4 sm:px-6 gap-4">


        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/Dashboard">
          <MdOutlineDashboardCustomize className="text-xl shrink-0" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>

        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/Profile">
          <FaUser className="text-xl shrink-0" />
          <span className="hidden sm:inline">Profile</span>
        </Link>

        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/AddProduct">
          <FaPlus className="text-xl shrink-0" />
          <span className="hidden sm:inline">Add New Listing</span>
        </Link>
  
       <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/">
          <PiSignOutFill className="text-xl shrink-0" />
          <span className="hidden sm:inline">Logout</span>
       </Link>

      </nav>
      <hr className="flex flex border-gray-300 mt-4"></hr>
      <h4 className="hidden sm:flex p-1text-black bg-gray-200 flex items-center justify-center w-full mb-4">ADMINSTRATION</h4>

       <nav className="flex flex-col text-white text-sm sm:text-base px-4 sm:px-6 gap-4">
        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/users">
          <FaUsers className="text-xl shrink-0" />
          <span className="hidden sm:inline">Users</span>
        </Link>

        <Link className="flex items-center gap-3 hover:bg-[#02E49B] px-2 py-3 rounded transition-colors duration-300" to="/reports">
          <MdOutlineReport className="text-xl shrink-0" />
          <span className="hidden sm:inline">Reports</span>
        </Link> 
      </nav>

    </div>
  );
}