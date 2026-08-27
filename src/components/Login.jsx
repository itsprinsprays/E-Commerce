import { useState} from "react";

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
<div className="flex justify-center items-center min-h-screen bg-gray-100"> 
       <div className="bg-[white] p-[10px] w-full flex flex-row ">

        <form onSubmit={handleSubmit} className="flex flex-col w-[500px] bg-[#72DAF7]">
            
        <input 
            type="text"
            placeholder="Enter Username"
            name="username"
            value={account.username}
            onChange={handleChanges}
            />

        <input 
            type="text"
            placeholder="Enter Password"
            name="password"
            value={account.password}
            onChange={handleChanges}
            />

        <button type="submit">Log In</button>
        </form>

        <div className="bg-[#494D4D] w-[250px]">
            <h1>hello</h1>
        </div>
    </div>
</div>
        </>
    )
}