import { useState } from "react";

export default function ReportMisconduct() {
    const[Misconduct, setMisconduct] = useState({
        email: "",
        description: ""
    })

    function handleChange(e) {
        setMisconduct({
            ...Misconduct,
            [e.target.name]: e.target.value
    });
    } 

    return(
        <>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white h-100 w-100 p-4 rounded-4xl flex flex-col gap-4">
                <h1 className="font-bold">Report a Misconduct</h1>
                <div className="">
                    <div>
                    <p>Email Address</p>
                    <input
                    type="text"
                    placeholder="Please inout your primary email communication"
                    name="email"
                    value={Misconduct.email}
                    onChange={handleChange}
                    />
                    </div>
                </div>
            </div>
        </div>
        </>
    ) 
}