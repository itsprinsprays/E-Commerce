import { CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

export default function CardProfile({ image, title, price }) {

    return (
    <>
        <div className="w-full bg-[#FFFFF2] flex flex-col rounded overflow-hidden hover:shadow-xl transition-shadow duration-300 gap-2 p-2 relative">
            {image && <img src={image} className="w-full h-40 sm:h-48 object-cover border-2 border-gray-300" />}
            
            <h1 className="absolute text-white font-bold mx-2">Available</h1>

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <h1 className="px-2 text-lg font-bold">{title}</h1>
                    <p className="px-2 pb-2">{price}</p>
                </div>

                <button className="flex flex-row justify-center items-center gap-2 border h-8 border p-2 mt-2 text-white rounded bg-[green] text-start shrink-0 tranistion-colors duration-300 hover:bg-[#02E49B] hover:text-black">
                    <FaCheck /> Mark as Sold

                </button>
            </div>

        </div>
              
    </>
    )
}
