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
        <div className="z-10 bg-[#003300] h-220 w-180 rounded-4xl flex flex-col items-center p-4 gap-4">
            <h1 className="text-white text-5xl my-12 font-bold">Forgot Password</h1>

            <div className="flex flex-row gap-8"> 
                <div className="flex justify-center">
                    <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="border bg-gray-300 h-30 w-30 text-9xl text-center"
                    />
                </div>

                <div className="flex justify-center">
                    <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="border bg-gray-300 h-30 w-30 text-9xl text-center"
                    />
                </div>

                <div className="flex justify-center">
                    <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="border bg-gray-300 h-30 w-30 text-9xl text-center"
                    />
                </div>

                <div className="flex justify-center">
                    <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="border bg-gray-300 h-30 w-30 text-9xl text-center"
                    />
                </div>
            </div>
             <div className="flex">
                    <button type="submit" className="bg-[white] rounded-full font-bold w-25 mt-5 p-3">Next</button>
            </div>

            <div className="text-white text-2xl m-4 font-bold">
            <p>Verify Your Identity</p>
            <p>We’ve sent a One-Time Password (OTP) to your registered email address or phone number. </p>
             </div>
            <div className="text-white text-2xl m-4 font-bold">
            <p>Please enter the code to verify your identity and reset your password.</p>
            </div>
            <div className="text-white text-2xl m-4 font-bold">
            <p>The code will expire in 5 minutes. Do not share it with anyone.</p>
            </div>
            <p className="text-white">Didn't receive the code? <span className="text-[orange]">Resend OTP</span></p>
        </div>
        </>
    ) 
}