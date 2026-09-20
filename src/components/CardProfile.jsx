import { CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

export default function CardProfile({ image, title, price }) {

    return (
    <>
        <div className="w-full bg-[#FFFFF2] flex flex-col rounded overflow-hidden hover:shadow-xl transition-shadow duration-300 gap-2 p-2 relative">
            {image && <img src={image} className="w-full h-40 sm:h-48 object-cover border-2 border-gray-300" />}
            
            <h1 className="absolute text-white font-bold mx-2 shadow-2xl">Available</h1>

            <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col min-w-0">
                    <h1 className="px-2 text-lg font-bold truncate">{title}</h1>
                    <p className="px-2 pb-2">{price}</p>
                </div>

                <button className="flex justify-center items-center gap-2 border w-full sm:w-auto border p-2 mt-2 truncate text-white rounded bg-[green] text-start tranistion-colors duration-300 hover:bg-[#02E49B] hover:text-black">
                    <FaCheck className="shrink-0"/> <span className="">Mark as Sold</span> 

                </button>
            </div>

        </div>
              
    </>
    )
}
