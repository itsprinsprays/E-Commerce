import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function ReportMisconduct({onClose}) {
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
            <div className="bg-white h-70 w-100 p-4 rounded-4xl flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold text-xl">Report a Misconduct</h1>
                    <IoMdClose className="text-2xl cursor-pointer" onClick={onClose}/>
                </div>
                <div className="px-8 flex flex-col gap-5 ">

                    <div>
                        <p className="font-bold"><span className="text-[red] px-1">*</span>Email Address</p>
                        <input
                        type="text"
                        placeholder="Primary email communication"
                        name="email"
                        value={Misconduct.email}
                        onChange={handleChange}
                        className="border px-4 py-1 w-full "
                        />
                    </div>

                    <div>
                        <p className="font-bold"><span className="text-[red] px-1">*</span>Detailed Description</p>
                        <input 
                        type="text"
                        placeholder="Detailed Description"
                        name="description"
                        value={Misconduct.description}
                        onChange={handleChange}
                        className="border px-4 py-1 w-full"
                        />
                    </div>
                    <div className="flex justify-center w-full">
                    <button type="submit" className="border w-30 p-2 rounded-full transitions-color duration-300 hover:bg-gray-300">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    ) 
}