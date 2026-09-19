import laurence from "../assets/laurence.jpg"
import imuss from "../assets/imuss.jpg"
import { FaFacebookMessenger, FaShare  } from "react-icons/fa";
import { MdReport } from "react-icons/md";

export default function Profile() {
    return (    
        <>
        <div className="flex flex-col relative">

            {/* <div className="bg-[green] h-50 w-full flex justify-center items-center bg-cover" style={{backgroundImage: `url(${imuss})`}}> </div> */}
            <div className="bg-[green] h-50 w-full flex justify-center items-center bg-cover"   > </div>
            <div className=" h-full p-9 ">
                <div className="bg-white h-48 w-48 rounded-full p-1.5 absolute top-20 left-1/2 transform -translate-x-1/2 ">  

                    <img src={laurence} alt="Profile" className="h-full w-full rounded-full ring-4 ring-green-500" />
                    
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">Laurence Caparros</h1>
                <h1 className="text-2xl ">Imus Campus</h1>
                <h1>4.9 (102 Reviews)</h1>
            </div>

            <div className="flex flex-row justify-center items-center gap-20">
                <button className="border p-1 w-40 rounded bg-[green] text-white flex justify-center items-center gap-2">
                    <FaFacebookMessenger /> Message</button>
                <button className="flex justify-center items-center gap-2 border w-40 p-1 text-[green] rounded">
                    <FaShare /> Profile</button>
                <button className="flex items-center justify-center gap-2 w-40 p-1 border rounded text-[green]">
                    <MdReport /> User</button>
            </div>

        </div>
        </>

 

    )
}