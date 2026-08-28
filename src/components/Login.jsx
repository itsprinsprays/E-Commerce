import { useState} from "react";
import { FcGoogle } from "react-icons/fc";
import Dashboard from "./Dashboard.jsx";
import Notification from "./Notification.jsx";

export default function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [account, setAccount] = useState({
        username: "",
        password: ""
    });


    function handleChanges(e) {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(account.username === "kabsu" && account.password === "kabsu") {
            setIsLoggedIn(true);
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

    if (isLoggedIn) {
         return <Dashboard />;
    } 


    return (
        <>
<div className="flex justify-center items-center min-h-screen bg-[#EEF0F4] "> 
       <div className="bg-[white] w-[50%] h-[500px] flex flex-row border-none rounded-2xl shadow-2xl">
        

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-[50%] bg-[#FFFFFF] border-l-0 rounded-l-2xl gap-3">

        <h1 className="text-3xl text-[#1B651B]">Hello Kabsuhenyo!</h1>
        <p className="w-[250px] text-justify leading-relaxed text-gray-500 mb-5">Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. </p>

        <input 
            type="text"
            placeholder="Username"
            name="username"
            value={account.username}
            onChange={handleChanges}
            className="border border-gray-300 rounded p-4 h-10 text-sm w-[65%]"
            />

        <input 
            type="password"
            placeholder="Password"
            name="password"
            value={account.password}
            onChange={handleChanges}
            className="border rounded border-gray-300 p-4 h-10 text-sm w-[65%]"
            />
        <p className="text-sm text-[green]">Forgot Password?</p>

        <button type="submit" className="border w-[65%] rounded bg-[green] h-10 text-sm text-[white] transition-colors duration-300 hover:bg-[#02E49B] hover:text-black">
            Log In</button>

        <button className="flex items-center gap-2 border rounded px-3 py-2 pl-9 w-[65%]">
        <FcGoogle className="w-5 h-5" />
        <span>Sign in with Google</span>
        </button>

        <p className=" text-gray-500">Don't have an account yet? <span className="text-[green]">Sign Up</span></p>
        </form>

        <div className="bg-[#1B651B] w-[50%] border-l-0 rounded-r-2xl">
            <h1></h1>
        </div>
    </div>
    {showNotification && <Notification />}
</div>
        </>
    )
}