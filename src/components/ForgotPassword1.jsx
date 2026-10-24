import { useState } from "react";
import ForgotPassword2 from "./ForgotPassword2";

export default function ForgotPassword1() {
    const [ForgotPasswordModal, setForgotPasswordModal] = useState(null);

    function forgotPasswordModalFunction() {
        setForgotPasswordModal(true);
    }

    return(
        <>
        {!ForgotPasswordModal && (
        <div className="z-10 bg-[#003300] h-120 w-100 rounded-4xl flex flex-col items-center p-4 gap-4">
            <h1 className="text-white text-2xl my-12 font-bold">Forgot Password</h1>

            <div className="flex flex-row gap-8"> 
                <div className="flex justify-center">
                    <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="border bg-gray-300 h-10 w-10 text-3xl text-center"
                    />
                </div>

                <div className="flex justify-center">
                    <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="border bg-gray-300 h-10 w-10 text-3xl text-center"
                    />
                </div>

              <div className="flex justify-center">
                    <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="border bg-gray-300 h-10 w-10 text-3xl text-center"
                    />
                </div>

               <div className="flex justify-center">
                    <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="border bg-gray-300 h-10 w-10 text-3xl text-center"
                    />
                </div>
            </div>
             <div className="flex">
                    <button type="submit" className="bg-[white] rounded-full font-bold w-15 mt-3 p-1 transitions-color duration-300 hover:bg-[green]" onClick={forgotPasswordModalFunction}>Next</button>
            </div>

            <div className="text-white text-xs font-bold">
            <p>Verify Your Identity</p>
            <p>We’ve sent a One-Time Password (OTP) to your registered email address or phone number. </p>
             </div>
            <div className="text-white text-xs font-bold">
            <p>Please enter the code to verify your identity and reset your password.</p>
            </div>
            
            <div className="text-white text-xs font-bold">
            <p>Please enter the code. It will expire in 5 minutes. Do not share it with anyone.</p>
            </div>
            <p className="text-white text-xs cursor-pointer">Didn't receive the code? <span className="text-[orange]">Resend OTP</span></p>
        </div>
        )}

        {ForgotPasswordModal && <ForgotPassword2 onClose={() => setForgotPasswordModal(false)}/>}
        </>
    ) 
}