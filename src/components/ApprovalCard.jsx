import { useState } from "react"
import { FaCheck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

export default function ApprovalCard({images, title, price, name, picture, details}) {


    return(
        <>
        <div className="bg-white border rounded-2xl overflow-hidden m-2">
            <div className="flex flex-row items-center p-4 gap-4 justify-between">

                <div className="flex flex-row gap-6">

                <img className="w-24 h-24"
                src={images}></img>

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
                    <div className="flex flex-row items-center p-2 rounded text-white bg-[green] ">
                    <FaCheck className="text-3xl "/> 
                    <p className="hidden sm:inline">Accept</p>
                    </div>
                    
                    <div className="flex flex-row items-center p-2 rounded text-white bg-[red] ">
                    <IoCloseOutline className="text-3xl"/> 
                    <p className="hidden sm:inline">Decline</p>
                    </div>
                    
                </div>

            </div>
        </div>
        </>
    )
}