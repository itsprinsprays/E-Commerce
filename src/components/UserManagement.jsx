import { useState } from "react"
import { FaSchoolFlag, FaUserGroup  } from "react-icons/fa6";
export default function UserManagement() {
    const [selected, setSelected] = useState("");
    const student = [
  { id: 1, name: "Robert Jan", username: "Bobeys", email: "robert.arpia@cvsu.edu.ph", studentId: "202411229", campus: "Imus" },
  { id: 2, name: "Ryhlle Batak", username: "Ryyy", email: "ryhlle.batak@cvsu.edu.ph", studentId: "202412341", campus: "Indang" },
  { id: 3, name: "Chan Chan", username: "Chans", email: "chan.angel@cvsu.edu.ph", studentId: "20234532", campus: "Bacoor" },
  { id: 4, name: "Jeds Benits", username: "Snirp", email: "prins.prays@cvsu.edu.ph", studentId: "20244332", campus: "Silang" },
  { id: 5, name: "Matchuu", username: "IEEE", email: "james.reid@cvsu.edu.ph", studentId: "20263214", campus: "Rosario" },
  { id: 6, name: "Kiels Ka-Gwapo", username: "Pogi", email: "kiels.gwapo@cvsu.edu.ph", studentId: "20273412", campus: "Silang" },
  { id: 7, name: "Lorens MLBB", username: "300star", email: "lorens.mlbb@cvsu.edu.ph", studentId: "19902341", campus: "Imus" },
  { id: 8, name: "Windil Lu", username: "ruby only", email: "dellulu@cvsu.edu.ph", studentId: "167490321", campus: "Sulasok" }
];


    return(
        <>
        <div className="bg-gray-400 min-h-screen pb-2">
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

        <div className="px-8 py-12">
            <div className="flex justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                    <FaUserGroup className="text-6xl"/>
                    <h1 className="text-4xl">User Management</h1>
                </div>
                <div className="bg-white rounded-2xl p-4">
                    <input
                    type="text"
                    placeholder="Search"
                    className="outline-none placeholder:text-black"
                    />
                </div>
            </div>
        </div>

        <div className="bg-white p-4 mx-10 rounded-2xl">
            <table className="table-fixed border-spacing-y-1 border-gray-400 w-full ">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="p-4 font-semibold text-gray-600 text-sm rounded-l-2xl ">ID</th>
                        <th className="p-4 font-semibold text-gray-600 text-sm">Name</th>
                        <th className="p-4 font-semibold text-gray-600 text-sm">Username</th>
                        <th className="p-4 font-semibold text-gray-600 text-sm">Cvsu Email</th>
                        <th className="p-4 font-semibold text-gray-600 text-sm">Student No.</th>
                        <th className="p-4 font-semibold text-gray-600 text-sm rounded-r-2xl">Campus</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {student.map((student) => (
                        <tr key={student.id}>
                            <td className="p-4 border-b-2 border-gray-300">{student.id}</td>
                            <td className="p-4 border-b-2 border-gray-300">{student.name}</td>
                            <td className="p-4 border-b-2 border-gray-300">{student.username}</td>
                            <td className="p-4 border-b-2 border-gray-300">{student.email}</td>
                            <td className="p-4 border-b-2 border-gray-300">{student.studentId}</td>
                            <td className="p-4 border-b-2 border-gray-300">{student.campus}</td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </div>
        </div>
        </>
    )
}
