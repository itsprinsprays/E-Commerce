import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
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

            <div className="bg-[green] w-80 h-80 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3">
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
                className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white"
                />
                </div>

                <input
                type="text"
                placeholder="Campus"
                name="campus"
                value={account.campus}
                onChange={handleChanges}
                />

                <input
                type="email"
                placeholder="CVSU Email"
                name="cvsuMail"
                value={account.cvsuMail}
                onChange={handleChanges}
                />

                <input
                type="password"
                placeholder="Password"
                name="password"
                value={account.password}
                onChange={handleChanges}
                />

                <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={account.confirmPassword}
                onChange={handleChanges}
                />

                <button type="submit">Sign Up</button>
                
                
            </form>
            </div>
        </div>
        </>
    )

}