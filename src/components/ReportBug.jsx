import { useState } from "react"

export default function ReportBug() {

    const [reportBug, setReportBug] = useState({
        email: "",
        description: ""
    });

    function handleChanges(e) {
        setReportBug({
            ...reportBug,
            [e.target.name]: e.target.value
        });
    }

    return(
        <>
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="w-100 h-100 bg-white rounded-3xl shadow-xl p-4 flex flex-col">
                <h1 className="font-bold">Report a Bug</h1>

                <div className="mx-8 my-4 flex flex-col">
                    <p className="font-bold"><span className="mx-1 text-[red]">*</span>Email </p>
                    <input
                    type="text"
                    placeholder="Input primary email communication"
                    value={reportBug.email}
                    name="email"
                    onChange={handleChanges}
                    className="border p-2"
                    />
                </div>
            </div>
        </div>
        </>
    )
}