import { useState } from "react";

export default function ForgotPassword1() {

        const [OTP, setOTP] = useState({
            otp1: "",
            otp2: "",
            otp3: "",
            otp4: ""
        });
    

    return(
        <>
        <div>
            <h1>Forgot Password</h1>
        </div>
        </>
    ) 
}