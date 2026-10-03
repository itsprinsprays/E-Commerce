import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        username: "",
        password: ""
    });

    return (
        <>

        <h1>Hello, Sign Up!</h1>

        </>
    )

}