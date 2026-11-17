import { Bug, Flag, Lightbulb, Search } from "lucide-react";


export default function ReportListing() {
    return(
        <>
            <div>
                <div className="p-6 grid grid-cols-3 gap-4">
                    <div className="rounded-lg p-2 flex flex-col justify-center items-center bg-[#00b982] shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                        <h1 className="font-semibold text-xl">Bug Reports</h1>
                        <div className="flex gap-2 items-center">
                            <Bug className="h-10 w-10"/>
                            <p className="text-xl">532</p>
                        </div>
                    </div>

                     <div className="rounded-lg p-2 flex flex-col justify-center items-center bg-[#00b982] shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                        <h1 className="font-semibold text-xl">Misconduct Reports</h1>
                        <div className="flex gap-2 items-center">
                            <Flag className="h-10 w-10"/>
                            <p className="text-xl">231</p>
                        </div>
                    </div>

                     <div className="rounded-lg p-2 flex flex-col justify-center items-center bg-[#00b982] shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                        <h1 className="font-semibold text-xl">Suggestion</h1>
                        <div className="flex gap-2 items-center">
                            <Lightbulb className="h-10 w-10"/>
                            <p className="text-xl">185</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[green] p-4 border-gray-400 flex gap-4 justify-between">
                        <div className="flex gap-4">
                            <label className="font-semibold text-xl ">Campus</label>
                            <select
                            className=" bg-white rounded-xl p-2">
                            <option value="">Choose an option</option>
                            <option value="Indang Campus">Main Campus (Don Severino delas Alas Campus) - Indang</option>
                            <option value="Bacoor City Campus">Bacoor City Campus</option>
                            <option value="Cavite City Campus">Cavite City Campus</option>
                            <option value="Carmona Campus">Carmona Campus</option>
                            <option value="General Trias City Campus">General Trias City Campus</option>
                            <option value="Imus Campus">Imus Campus</option>
                            <option value="Maragondon Campus">Maragondon Campus</option>
                            <option value="Naic Campus">Naic Campus</option>
                            <option value="Rosario Campus (CCAT Campus)">Rosario Campus (CCAT Campus) </option>
                            <option value="Silang Campus">Silang Campus </option>
                            <option value="Tanza Campus">Tanza Campus </option>
                            <option value="Trece Martires City Campus">Trece Martires City Campus </option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 bg-white rounded-xl p-2">
                            <Search className="w-5 h-5"/>
                            <input
                            type="text"
                            placeholder="Search"
                            />
                        </div>
                </div>
            </div>
        </>
    )
}