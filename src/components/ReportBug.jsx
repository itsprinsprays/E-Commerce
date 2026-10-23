import { useRef, useState } from "react"
import { IoMdAdd, IoMdClose } from "react-icons/io";



export default function ReportBug({onClose}) {

    const [reportBug, setReportBug] = useState({
        email: "",
        description: ""
    });

    const fileInputRef = useRef(null);

    const [image, setImage] = useState(null);

    function handleimageChange(e) {
        const file = e.target.files[0];

        if(file) {
            setImage(URL.createObjectURL(file));
        }
    }

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
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-xl">Report a Bug</h1>
                    <IoMdClose className="text-2xl cursor-pointer" onClick={onClose}/>
                </div>
                <div className="mx-8 my-4 flex flex-col gap-3">
                    <div className="flex flex-col">
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

                    <div className="flex flex-col">
                        <p className="font-bold"><span className="text-[red] mx-1">*</span>Detailed Description</p>
                        <input
                        type="text"
                        placeholder="Input detailed description"
                        value={reportBug.description}
                        name="description"
                        onChange={handleChanges}
                        className="border p-2"
                        />
                    </div>

                    <div>
                        <p className="font-bold"><span className="text-[red] mx-1">*</span>Attachment</p>
                        <p className="text-gray-500 text-xs">Upload image (Size &lt; 1MB) or capture screen to help resolve issues effectively </p>
                        
                        <div className="bg-gray-200 flex items-center justify-center h-15 border-2 border-dashed border-gray-400 rounded-2xl m-2">
                            {image && (
                                <img src={image}
                                alt="preview"
                                className="w-full h-full object-cover"
                                />
                            )}

                            {!image && ( 
                                <>
                                <div className="flex flex-col justify-center items-center">
                                <IoMdAdd className="text-3xl text-gray-600"/>
                                <button onClick={() => fileInputRef.current?.click()} className="text-gray-600 text-xs">
                                    Attachment
                                </button>
                                </div>
                                <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleimageChange}
                                hidden
                                />
                                </>
                            )}
                        </div>

                        <button type="submit" className="border w-full rounded-full p-1 transitions-color duration-300 hover:bg-gray-200">Submit</button>

                    </div>

                </div>

            </div>
        </div>
        </>
    )
}