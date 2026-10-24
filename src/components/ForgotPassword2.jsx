import Logo from "../assets/Logo.png";
import { FaRegUserCircle  } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


export default function ForgotPassword2({onClose}) {
    
    const [forgotPassword, setForgotPassword] = useState({
        password: "",
        confirmPassword: ""
    });

    function handleChanges(e) {
        setForgotPassword({
            ...forgotPassword,
            [e.target.name]: e.target.value
        })
    }


    return(
        <>
        <div className="z-10 h-80 w-90 bg-[#003300] rounded-4xl p-4 flex flex-col items-center relative">
            <IoMdClose className="self-start text-white text-xl absolute cursor-pointer" onClick={onClose}/>
            <img className="object-contain h-20 bg" alt="Logo" src={Logo}></img>
            <h1 className="text-white font-bold text-2xl ">Forgot Password</h1>

            <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-row justify-center items-center gap-2 text-white border p-2">
                <FaRegUserCircle className="text-2xl"/>
                <input
                type="text"
                placeholder="Enter Password"
                value={forgotPassword.password}
                name="password"
                onChange={handleChanges}
                className="border-l-2 px-2 outline-none"
                />
            </div>
            
            <div className="flex flex-row text-white border p-2 gap-2">
                <FaRegUserCircle className="text-2xl"/>
                <input
                type="text"
                placeholder="Confirm Password"
                value={forgotPassword.confirmPassword}
                name="confirmPassword"
                onChange={handleChanges}
                className="border-l-2 px-2 outline-none"
                />
            </div>

            <button type="submit" className="border text-black transitions-color duration-300 hover:bg-[green] bg-white p-1 rounded-full">
                Next</button>
        </div>
        </div>
    
        </>
    )
}