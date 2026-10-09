import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaRegEnvelope  } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdMarkEmailRead } from "react-icons/md";
import laya from "../assets/laya.png";

export default function SignUp() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        username: "",
        campus: "",
        cvsuMail: "",
        password: "",
        confirmPassword: ""
    });

    function handleChanges(e) {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>

        <div className="w-full h-screen flex flex-col items-center justify-center gap-3" style={{ backgroundImage: `url(${laya})` }}>

        <div className="absolute inset-0 bg-white/50"></div>

            <div className="z-10 bg-[#163120] w-90 h-120 rounded-3xl shadow-lg flex flex-col items-center pt-16 gap-3">
            <h1 className="text-white text-2xl font-bold">Hello, Sign Up!</h1>

            <form className="flex flex-col items-center justify-center gap-3"> 

                <div className="flex flex-row items-center gap-2 rounded border-gray-200 border p-2 w-full">
                    <FaRegUserCircle className="text-white text-2xl" />
                    <input 
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={account.username}
                    onChange={handleChanges}
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white text-sm placeholder:text-sm"
                    />
                </div>

                <div className="flex flex-row items-center gap-2 rounded border-gray-200 border p-2 w-full">
                    <FaRegUserCircle className="text-white text-2xl" />
                    <input
                    type="text"
                    placeholder="Campus"
                    name="campus"
                    value={account.campus}
                    onChange={handleChanges}
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white text-sm"
                    />
                </div>
                
                <div className="flex flex-row items-center gap-2 rounded border-gray-200 border p-2 w-full">
                    <MdMarkEmailRead className="text-white text-2xl" />
                    <input
                    type="email"
                    placeholder="CVSU Email"
                    name="cvsuMail"
                    value={account.cvsuMail}
                    onChange={handleChanges}
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white text-sm"
                    />
                </div>

                <div className="flex flex-row items-center gap-2 rounded border-gray-200 border p-2 w-full">
                    <TbLockPassword className="text-white text-2xl" />
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={account.password}
                    onChange={handleChanges}
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white text-sm"
                    />
                </div>

                <div className="flex flex-row items-center gap-2 rounded border-gray-200 border p-2 w-full">
                    <TbLockPassword className="text-white text-2xl" />
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={account.confirmPassword}
                    onChange={handleChanges}
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white text-sm"
                    />
                </div>

                <button type="submit" className="bg-white border rounded-2xl h-10 w-full text-black font-bold hover:bg-gray-200 transition duration-300">Sign Up</button>
                <p className="text-white text-sm">Already have an account? <a href="/" className="text-green-500 hover:underline">Login</a></p>
                
                
            </form>
            </div>
        </div>
        </>
    )

}