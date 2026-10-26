import { useState } from "react"
import { FaCheck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import ListingModals from "./ListingModals";
import AcceptNotitification from "../../Notification/AcceptNotification";
export default function ApprovalCard({images, title, price, name, picture, details, onClick}) {

    const [accept, setAccept] = useState(null);

    function acceptNotitification() {
        setAccept(true);
    }

    return(
        <>
        <div className="bg-white border rounded-2xl overflow-hidden m-2 transitions-color duration-300 hover:bg-gray-200">
            <div className="flex flex-row items-center p-4 gap-4 justify-between">

                <div className="flex flex-row gap-6">

                <img className="w-24 h-24"
                src={images[0]}></img>

                <div className="flex flex-col w-40">
                <p>{name}</p>
                <p>{title}</p>
                <p className="text-[green]">{price}</p>
                 </div>

                <div className="flex flex-col ">
                <h1 className="font-bold">DETAILS:</h1>
                <p>{details[1]}</p>
                <p>{details[2]}</p>
                <p>{details[3]}</p>
                </div>

                </div>

                <div className="flex flex-col gap-2">

                    <div className="flex flex-row items-center p-2 rounded text-white bg-[#2196f3] cursor-pointer gap-2"
                    onClick={onClick}>
                        <GrView className="text-3xl"/>
                        <p className="hidden sm:inline">
                            View</p>
                    </div>

                    <div className="flex flex-row items-center p-2 rounded text-white bg-[#4caf50] cursor-pointer gap-2"
                    onClick={acceptNotitification}>
                        <FaCheck className="text-3xl "/> 
                        <p className="hidden sm:inline">Accept</p>
                    </div>
                    
                    <div className="flex flex-row items-center p-2 rounded text-white bg-[#d32f2f] cursor-pointer gap-2">
                        <IoCloseOutline className="text-3xl"/> 
                        <p className="hidden sm:inline">Decline</p>
                    </div>
                    
                </div>

            </div>
        </div>

        {accept && <AcceptNotitification onClose={() => setAccept(false)} />}

        </>
    )
}