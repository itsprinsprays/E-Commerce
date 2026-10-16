import { IoLocation } from "react-icons/io5";

export default function ProductProfile({ Profile }) {

return(

    <div className="font-bold bg-[green] my-2 h-full rounded-lg p-2 w-50 mt-2 shadow-lg flex flex-col items-center justify-center">
      <h1 className="text-white">Seller Information:</h1>
      <div className="flex flex-row items-center gap-2 text-white">
        <img src={Profile.picture} className="h-10 rounded-full" />
        <div>
          <p>{Profile.name}</p>
          <IoLocation className="inline"/> <span className="font-semibold truncate">{Profile.campus}</span>
          </div>
        </div>
    </div>    
)


}