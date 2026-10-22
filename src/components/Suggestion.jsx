import { useState } from "react"
import { IoMdClose } from "react-icons/io";


export default function Suggestion({onClose}) {

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
                <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold">Provide Suggestions</h1>
                <IoMdClose className="text-2xl cursor-pointer" onClick={onClose}/>
                </div>

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
                    <p className="font-bold"><span className="text-[red] mx-1">*</span>Detailed Description</p>
                    <textarea
                    placeholder="Input your suggestion here"
                    value={Suggestion.description}
                    name="description"
                    onChange={handleChanges}
                    className="border p-2 h-40 w-full resize-none"
                    />
                </div>

                <button type="submit" className="font-bold border rounded-full p-1 transitions-color duration-300 hover:bg-gray-200">Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}