import { CiUser } from "react-icons/ci";

export default function Card({ image, title, price, name, gmail }) {
  return (
    <div 
      className={`w-full bg-[white]flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 gap-2 overflow-hidden`}>
          {image && <img src={image} className="w-full h-40 sm:h-48 object-cover border-2 border-gray-300" />}

        <div className="p-3 flex flex-col gap-2">
          <p className="text-base sm:text-lg font-semibold truncate">{title}</p>
          <p className="text-sm sm:text-base text-gray-500">{price}</p>

            <div className="w-full bg-gray-200 rounded-b-lg p-1 mt-2 flex flex-col gap-1">
                <p className="text-sm text-gray-600">Listed By</p>

                <div className="flex gap-2 items-center min-w-0">
                  <CiUser className="shrink-0 text-gray-500 bg-[white] w-6 h-7 border-2 border-gray-300 rounded" />
                    <div className="flex flex-col min-w-0">
                      <p className="text-sm text-black truncate">{name || "Anonymous"}</p>
                      <p className="text-xs text-gray-500 underline italic truncate">{gmail || "No Email Provided"}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
