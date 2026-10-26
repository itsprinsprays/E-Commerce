import { FaRegCheckSquare  } from "react-icons/fa";

export default function AcceptNotitification({onClose}) {

    return (
        <>
        <div className=" bg-black/50 fixed inset-0 flex items-center justify-center z-50">
            <div className="h-50 w-100 bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg gap-3">
                <div className="h-15 w-15 bg-[darkgreen] rounded-full flex items-center justify-center">
                <FaRegCheckSquare className="text-white text-2xl "/>
                </div>
                <h1 className="text-gray-600">Succesfully added to listing </h1>
                <button type="submit" className="bg-[darkgreen] text-white py-1 px-6 rounded cursor-pointer transitions-color duration-300 hover:bg-green-500"
                    onClick={onClose}>
                    Done</button>
            </div>
        </div>
        </>
    )

}