import { useState} from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {

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

        setAccount({
            username: "",
            password: ""
        })
    }

    return (
        <>
<div className="flex justify-center items-center min-h-screen bg-gray-400 "> 
       <div className="bg-[white] w-[50%] h-[500px] flex flex-row border-none rounded-2xl shadow-2xl">
        

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-[50%] bg-[#FFFFFF] border-l-0 rounded-l-2xl gap-3">

        <h1 className="text-3xl">Hello Again!</h1>
        <p className="w-[250px] text-justify leading-relaxed text-gray-400 mb-5">Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. </p>

        <input 
            type="text"
            placeholder="Username"
            name="username"
            value={account.username}
            onChange={handleChanges}
            className="border border-gray-300 rounded p-4 h-10 text-sm"
            />

        <input 
            type="text"
            placeholder="Password"
            name="password"
            value={account.password}
            onChange={handleChanges}
            className="border rounded border-gray-300 p-4 h-10 text-sm "
            />

        <button type="submit" className="border w-[50%] rounded bg-[#72DAF7] h-10 text-sm">
            Log In</button>

        <button className="flex items-center gap-2 border rounded px-3 py-2">
        <FcGoogle className="w-5 h-5" />
        <span>Sign in with Google</span>
        </button>
        </form>
    
        
        <div className="bg-[#72DAF7] w-[50%] border-l-0 rounded-r-2xl">
            <h1></h1>
        </div>
    </div>
</div>
        </>
    )
}