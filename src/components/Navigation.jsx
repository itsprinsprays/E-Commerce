import { FaShoppingCart, FaBox, FaUser } from "react-icons/fa"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom"

export default function Navigation() {

    
    return (
        <>
        <div className="bg-[green] w-[10%] sm:w-[15%] md:w-[20%] lg:w-[25%] transition-all duration-300 ease-in-out h-screen flex flex-col py-10 top-0 left-0 ">
        <nav className="flex flex-col text-[white] text-sm pt-25 px-10">

            <Link className="transition-colors duration-300 hover:bg-[#02E49B] px-2 py-3 border-none rounded inline-flex items-center gap-2" 
            to="/Dashboard">
                <MdOutlineDashboardCustomize /> Dashboard</Link>

            <Link className="transition-colors duration-300 hover:bg-[#02E49B] px-2 py-3 border-none rounded inline-flex items-center gap-2"
            to="/Orders">
                <FaBox /> Orders</Link>

            <Link className="transition-colors duration-300 hover:bg-[#02E49B] px-2 py-3 border-none rounded inline-flex items-center gap-2"
            to="/Cart">
                <FaShoppingCart /> Cart</Link>

            <Link className="transition-colors duration-300 hover:bg-[#02E49B] px-2 py-3 border-none rounded inline-flex items-center gap-2"
             to="/profile">
                <FaUser /> Profile</Link>
        </nav>
        </div>
        </>
    )

}