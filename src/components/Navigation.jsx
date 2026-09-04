import { FaShoppingCart, FaBox, FaUser } from "react-icons/fa"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom"

export default function Navigation() {

    
    return (
        <>
        <div className="bg-[green] w-[200px] h-screen flex flex-col py-10 ">
        <nav className="flex flex-col gap-2 text-[white] text-sm pt-25 px-10">

            <Link className="transition-colors duration-300 hover:bg-[#02E49B] px-3 py-2 border-none rounded inline-flex items-center gap-2" 
            to="/Dashboard">
                <MdOutlineDashboardCustomize /> Dashboard</Link>

            <Link className="transition-colors duration-300 hover:bg-[#02E49B] px-3 py-2 border-none rounded inline-flex items-center gap-2"
            to="/Orders">
                <FaBox /> Orders</Link>

            <Link className="transition-colors duration-300 hover:bg-[#02E49B] px-2 py-2 border-none rounded inline-flex items-center gap-2"
            to="/Cart">
                <FaShoppingCart /> Cart</Link>

            <Link className="transition-colors duration-300 hover:bg-[#02E49B] px-2 py-2 border-none rounded inline-flex items-center gap-2"
             to="/profile">
                <FaUser /> Profile</Link>
        </nav>
        </div>
        </>
    )

}