import { useState } from "react"
import { FaSchoolFlag } from "react-icons/fa6";
export default function UserManagement() {
    const [selected, setSelected] = useState("");


    return(
        <>
        <div className="bg-[darkgreen] h-30 flex items-center justify-center">
            <div className="flex flex-row items-center bg-white p-4 rounded-2xl gap-1">
                <FaSchoolFlag className="text-2xl"/>
                <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="outline-none">
                
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
        </div>
        </>
    )
}
