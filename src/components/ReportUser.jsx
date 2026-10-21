import { FaBug } from "react-icons/fa";
import { MdStickyNote2, MdNotificationsActive  } from "react-icons/md";
export default function ReportUser() {

    return(
        <>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white h-80 w-100 p-4 shadow-xl rounded-3xl">
                <h1 className="font-bold">FEEDBACK FORM</h1>
                <p className="text-gray-400 text-xs">I would like to</p>
                <div className="p-4 gap-2">
                    <div className="flex items-center justify-center gap-2 border-3 p-4">
                        <FaBug className="text-4xl"/>
                        <div className="">
                        <h1 className="font-bold">Report a bug</h1>
                        <p className="text-xs text-gray-400">E.g, login failed, slow page loading, data error...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}