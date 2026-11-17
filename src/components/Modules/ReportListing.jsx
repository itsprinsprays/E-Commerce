import { Bug, Flag, Lightbulb, Search } from "lucide-react";


export default function ReportListing() {

const student = [
  { id: 1, name: "Robert Jan", username: "Bobeys", reportType: "Misconduct Report",email: "robert.arpia@cvsu.edu.ph", studentId: "202411229", campus: "Imus" },
  { id: 2, name: "Ryhlle Batak", username: "Ryyy", reportType: "Suggestion",email: "ryhlle.batak@cvsu.edu.ph", studentId: "202412341", campus: "Indang" },
  { id: 3, name: "Chan Chan", username: "Chans", reportType: "Misconduct Report",email: "chan.angel@cvsu.edu.ph", studentId: "20234532", campus: "Bacoor" },
  { id: 4, name: "Jeds Benits", username: "Snirp", reportType: "Bug Report",email: "prins.prays@cvsu.edu.ph", studentId: "20244332", campus: "Silang" },
  { id: 5, name: "Matchuu", username: "IEEE", reportType: "Misconduct Report",email: "james.reid@cvsu.edu.ph", studentId: "20263214", campus: "Rosario" },
  { id: 6, name: "Kiels Ka-Gwapo", username: "Pogi", reportType: "Misconduct Report",email: "kiels.gwapo@cvsu.edu.ph", studentId: "20273412", campus: "Silang" },
  { id: 7, name: "Lorens MLBB", username: "300star", reportType: "Suggestion",email: "lorens.mlbb@cvsu.edu.ph", studentId: "19902341", campus: "Imus" },
  { id: 8, name: "Windil Lu", username: "ruby only", reportType: "Bug Report",email: "dellulu@cvsu.edu.ph", studentId: "167490321", campus: "Sulasok" }
];

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

                <div className="bg-[#adeacb] p-4 border-gray-400 flex gap-4 justify-between">
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

                <div className="p-2">
                    <table className="w-full">
                        <thead className="bg-gray-200 rounded-xl text-left">
                            <th className="p-2">Name</th>
                            <th>Username</th>
                            <th>Report Type</th>
                            <th>Email</th>
                            <th>Student ID</th>
                            <th>Campus</th>
                        </thead>
                        <tbody>
                            {student.map((student) =>
                            <tr key={student.studentId} className="hover:bg-gray-200">
                                <td className="p-2">{student.name}</td>
                                <td className="p-2">{student.username}</td>
                                <td className="p-2">{student.reportType}</td>
                                <td className="p-2">{student.email}</td>
                                <td className="p-2">{student.studentId}</td>
                                <td className="p-2">{student.campus}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}