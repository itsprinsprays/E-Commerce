import { useRef, useState } from "react"

export default function ReportBug() {

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
                <h1 className="font-bold">Report a Bug</h1>

                <div className="mx-8 my-4 flex flex-col gap-4">
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
                            <button onClick={() => fileInputRef.current?.click()}>
                                Attachment
                            </button>
                            <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleimageChange}
                            hidden
                            />
                            </>
                        )}</div>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}