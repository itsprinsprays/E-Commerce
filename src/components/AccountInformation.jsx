import { useState } from "react";
import { FaRegUserCircle  } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export default function AccountInformation( {onClick} ) {
    const [accountInformation, setAccountInformation] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        phoneNumber: "",

    });

    function handleChanges(e) {
        setAccountInformation({
            ...accountInformation,
            [e.target.name]: e.target.value
        });
    }   

    return(
        <>
            <form className="z-10 flex flex-col items-center justify-center gap-3 bg-[#003300] w-90 h-100 rounded-3xl shadow-lg p-5 text-white font-semibold">
                <h1>Account Information</h1>
                
                <div className="border-l-2 px-2 py-1 flex flex-row items-center gap-2 rounded border-gray-200 border">
                    <FaRegUserCircle className="text-white text-2xl" />
                    <input 
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={accountInformation.lastName}
                    onChange={handleChanges}
                    required
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white"
                    />
                </div>
                
                <div className="border-l-2 px-2 py-1 flex flex-row items-center gap-2 rounded border-gray-200 border ">
                    <FaRegUserCircle className="text-white text-2xl" />
                    <input 
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={accountInformation.firstName}
                    onChange={handleChanges}
                    required
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white"
                    />
                </div>

                <div className="border-l-2 px-2 py-1 flex flex-row items-center gap-2 rounded border-gray-200 border">
                    <FaRegUserCircle className="text-white text-2xl" />
                    <input 
                    type="text"
                    placeholder="Middle Name"
                    name="middleName"
                    value={accountInformation.middleName}
                    onChange={handleChanges}
                    required
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white"
                    />
                </div>

                <div className="border-l-2 px-2 py-1 flex flex-row items-center gap-2 rounded border-gray-200 border">
                    <IoCallOutline className="text-white text-2xl" />
                    <input 
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={accountInformation.phoneNumber}
                    onChange={handleChanges}
                    required
                    className="border-l-2 border-gray-200 px-2 placeholder:text-gray-400 w-full outline-none text-white"
                    />
                </div>

                <button type="submit" className="border w-[65%] rounded bg-[green] h-10 text-sm text-[white] transition-colors duration-300 hover:bg-[#02E49B] hover:text-black" onClick={onClick}>
                    Next
                </button>
            </form>
        </>
    )
}