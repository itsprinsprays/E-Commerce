export default function ReportUser() {

    return(
        <>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white h-80 w-80 p-4 shadow-xl rounded-3xl">
                <h1 className="font-bold">FEEDBACK FORM</h1>
                <p className="text-gray-400 text-xs">I would like to</p>

                <div>
                    <button className="border" type="submit">Report a bug</button>
                </div>

            </div>
        </div>
        </>
    )
}