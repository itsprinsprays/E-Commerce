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
        <div className="z-10 bg-[#003300] h-200 w-180 rounded-4xl flex flex-col items-center p-4 gap-4">
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
        </div>
        </>
    ) 
}