import { useState } from "react";

export default function ForgotPassword1() {
    const [OTP, setOTP] = useState({
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: ""
    });

    const [OTPPin, setOTPPin] = useState(false);

    function handleOTPChange(e, key) {
        const value = e.target.value;

        // Allow only numbers
        if (!/^\d*$/.test(value)) return;

        setOTP({
            ...OTP,
            [key]: value
        });
    }

    function OTPPinFunction() {
        const enteredOTP = Object.values(OTP).join("");

        if (enteredOTP.length !== 4) {
            alert("Please enter all 4 OTP digits.");
            return;
        }

        setOTPPin(true);
        console.log("Entered OTP:", enteredOTP);
    }

    return (
        <div className="z-10 bg-[#003300] h-120 w-100 rounded-4xl
                        flex flex-col items-center p-4 gap-4">

            <h1 className="text-white text-2xl my-12 font-bold">
                Forgot Password
            </h1>

            <div className="flex gap-8">
                {Object.keys(OTP).map((key) => (
                    <input
                        key={key}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={OTP[key]}
                        onChange={(e) => handleOTPChange(e, key)}
                        className="border bg-gray-300 h-10 w-10
                                   text-3xl text-center rounded"
                    />
                ))}
            </div>

            <button
                type="button"
                className="bg-white rounded-full font-bold w-15
                           mt-3 p-1 transition-colors duration-300
                           hover:bg-green-500"
                onClick={OTPPinFunction}
            >
                Next
            </button>

            {OTPPin && (
                <p className="text-green-300 font-bold">
                    All OTP digits entered!
                </p>
            )}

            <div className="text-white text-xs font-bold">
                <p>Verify Your Identity</p>
                <p>
                    We’ve sent a One-Time Password (OTP) to your
                    registered email address or phone number.
                </p>
            </div>

            <div className="text-white text-xs font-bold">
                <p>
                    Please enter the code to verify your identity
                    and reset your password.
                </p>
            </div>

            <div className="text-white text-xs font-bold">
                <p>
                    Please enter the code. It will expire in 5 minutes.
                    Do not share it with anyone.
                </p>
            </div>

            <p className="text-white text-xs cursor-pointer">
                Didn't receive the code?{" "}
                <span className="text-orange-400 hover:underline">
                    Resend OTP
                </span>
            </p>
        </div>
    );
}