import { CiUser } from "react-icons/ci";

export default function Card({ image, title, price, name, gmail }) {
  return (
    <div 
      className={`w-[25%] h-[300px] bg-[white] items-center justify-center flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 gap-2`}>
          {image && <img src={image} className="w-full h-1/2 object-cover border-2 border-gray-300 rounded-t-lg" />}
        <div className="h-1/2 w-full px-2">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-md text-gray-500">{price}</p>

            <div className="w-full bg-gray-200 h-[50%] rounded-b-lg flex p-1 mt-2 flex flex-col gap-1">
                <p className="text-sm text-gray-600">Listed By</p>

                <div className="flex gap-2 items-center">
                <CiUser className="text-gray-500 bg-[white] w-6 h-7 border-2 border-gray-300 rounded" />
                  <div className="flex flex-col">
                <p className="text-sm text-black">{name || "Anonymous"}</p>
                <p className="text-xs text-gray-500 underline italic">{gmail || "No Email Provided"}</p>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
