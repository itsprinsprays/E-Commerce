import { useState } from "react"

export default function Suggestion() {

    const [Suggestion, setSuggestion] = useState({
        email: "",
        description: ""
    });

    function handleChanges(e) {
        setSuggestion({
            ...Suggestion,
            [e.target.name]: e.target.value
        });
    }

    return(
        <>
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-100 h-100 rounded-3xl p-4 shadow-xl">
                <h1>Provide Suggestions</h1>

                <div className="my-4 mx-8 flex flex-col gap-4">
                    <div className="flex flex-col ">
                    <p className="font-bold"><span className="text-[red] mx-1">*</span>Email Address</p>
                    <input
                    type="text"
                    placeholder="Enter your primary email"
                    value={Suggestion.email}
                    name="email"
                    onChange={handleChanges}
                    className="border p-2"
                    />
                    </div>
                

                <div className="flex flex-col">
                    <p className="font-bold"><span className="text-[red] mx-1">*</span>Detailed Desription</p>
                    <textarea
                    placeholder="Input your suggestion here"
                    value={Suggestion.description}
                    name="description"
                    onChange={handleChanges}
                    className="border p-2 h-40 w-full resize-none"
                    />

                </div>
                </div>
            </div>
        </div>
        </>
    )
}