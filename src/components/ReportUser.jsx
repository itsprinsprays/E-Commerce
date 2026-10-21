import { FaBug } from "react-icons/fa";
import { MdStickyNote2, MdNotificationsActive } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import ReportMisconduct from "./ReportMisconduct";
export default function ReportUser( {onClose} ) {
    
    const [ReportMisconductModal, setReportMisconductModal] = useState(false);

    function ReportMisconductFunction() {
        setReportMisconductModal(true);
    }

    return(
        <>
        {!ReportMisconductModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white h-100 w-100 p-4 shadow-xl rounded-3xl ">
                <div className="flex items-center justify-between">
                <h1 className="font-bold">FEEDBACK FORM</h1>
                <IoMdClose className="text-2xl cursor-pointer" onClick={onClose}/>
                </div>
                <p className="text-gray-400 text-xs">I would like to</p>
                <div className="p-4 flex flex-col gap-8">
                    <div className="flex items-center justify-center gap-2 border-3 p-4 transitions-color duration-300 hover:bg-gray-200">
                        <FaBug className="text-4xl"/>
                        <div>
                            <h1 className="font-bold">Report a bug</h1>
                            <p className="text-xs text-gray-400">E.g, login failed, slow page loading, data error...</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center border-3 gap-2 p-4 transitions-color duration-300 hover:bg-gray-200">
                        <MdStickyNote2 className="text-4xl"/>
                        <div>
                            <h1 className="font-bold">Provide Suggestions</h1>
                            <p className="text-gray-400 text-xs">E.g, support new features, improve the system...</p>
                        </div>
                    </div>

                    <div className="flex flex-row border-3 p-4 gap-2 items-center align-center transitions-color duration-300 hover:bg-gray-200">
                        <MdNotificationsActive className="text-4xl"/>
                        <div onClick={ReportMisconductFunction}>
                            <h1 className="font-bold">Report Misconduct</h1>
                            <p className="text-gray-400 text-xs">Report fraudulent, corrupt behavior of the user</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        )}

        {ReportMisconductModal && (
    <ReportMisconduct onClose={() => setReportMisconductModal(false)} />
)}
        </>
    )
}