import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../assets/Logo.png";
import Notification from "../../Notification/LoginNotification.jsx"
import laya from "../../../assets/laya.png";
import ForgotPassword from "../../ForgotPassword.jsx";


export default function Login() {
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const [account, setAccount] = useState({
        username: "",
        password: ""
    });
    const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

    function forgotPasswordFunction() {
        setForgotPasswordModal(true);
    }

    function handleChanges(e) {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (account.username === "kabsu" && account.password === "kabsu") {
            navigate("/dashboard");
        } else {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000)
        }

        setAccount({
            username: "",
            password: ""
        })
    }

    return (
        <>
            <div
    className="flex justify-center items-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${laya})` }}>
       
                   {!forgotPasswordModal && ( 

                <div className="bg-white z-10 h-[500px] flex flex-row border-none rounded-2xl shadow-2xl p-2">

                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-[50%] bg-[#FFFFFF] border-l-0 rounded-l-2xl gap-3">

                        <h1 className="text-3xl text-[#1B651B]">Kumusta Kabsuhenyo!</h1>
                        <p className="w-[250px] text-justify leading-relaxed text-gray-500 mb-5">Cavite State University - Imus Campus Marketplace</p>

                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={account.username}
                            onChange={handleChanges}
                            required
                            className="border border-gray-300 rounded p-4 h-10 text-sm w-[65%]"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={account.password}
                            onChange={handleChanges}
                            required
                            className="border rounded border-gray-300 p-4 h-10 text-sm w-[65%]"
                        />
                        <p className="text-sm text-[green] cursor-pointer" onClick={forgotPasswordFunction}>Forgot Password?</p>

                        <button type="submit" className="border w-[65%] rounded bg-[green] h-10 text-sm text-[white] transition-colors duration-300 hover:bg-[#02E49B] hover:text-black">
                            Log In</button>

                        <Link to="/signup" className=" text-gray-500">Don't have an account yet? <span className="text-[green]">Sign Up</span></Link>
                    </form>

                    <div className=" bg-[#1B651B] border-l-0 rounded-r-2xl flex flex-col items-center justify-center relative">
                        <img className="object-contain h-80 mb-20" alt="Logo"
                            src={Logo}></img>
                        <h1 className="text-4xl lg:text-7xl text-white font-bold mt-4 absolute bottom-[120px] transition-all duration-300 ease-in-out ">iskonek</h1>
                        <h1 className="text-white lg:text-3xl lg:mt-5 font-semibold absolute bottom-[80px] transition-all duration-300 ease-in-out ">Campus Marketplace</h1>
                    </div>
                </div>
                   )}

               {forgotPasswordModal && <ForgotPassword onClose={() => setForgotPasswordModal(false)}/> }


                {showNotification && <Notification />}
            </div>
        </>
    )
}