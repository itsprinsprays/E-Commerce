import { FaBug } from "react-icons/fa";
import { MdStickyNote2, MdNotificationsActive  } from "react-icons/md";
export default function ReportUser() {

    return(
        <>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white h-80 w-100 p-4 shadow-xl rounded-3xl ">
                <h1 className="font-bold">FEEDBACK FORM</h1>
                <p className="text-gray-400 text-xs">I would like to</p>
                <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2 border-3 p-4">
                        <FaBug className="text-4xl"/>
                        <div>
                        <h1 className="font-bold">Report a bug</h1>
                        <p className="text-xs text-gray-400">E.g, login failed, slow page loading, data error...</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center border-3 gap-2 p-4 ">
                        <MdStickyNote2 className="text-4xl"/>
                        <div>
                        <h1 className="font-bold">Provide Suggestions</h1>
                        <p className="text-gray-400 text-xs">E.g, support new features, improve the system...</p>
                        </div>
                    </div>

            

                </div>
            </div>
        </div>
        </>
    )
}