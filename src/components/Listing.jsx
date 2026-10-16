import { useState } from "react";
import laya from "../assets/laya.png";
import laurence from "../assets/laurence.jpg";
import { FaBackwardStep } from "react-icons/fa6";


export default function Listing() {

    const [listing, setListing] = useState({
        Title: "",
        Description: "",
        Price: "",
        Category: "",
        Images: [],
    })

    function handleChange(e) {
        setListing({
            ...listing,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>

        <div
            className="flex min-h-screen bg-cover bg-center "
            style={{ backgroundImage: `url(${laya})` }}>

        <div className="bg-black/50 w-60 h-screen flex flex-col items-center p-3">
            <FaBackwardStep className="text-white text-2xl self-start cursor-pointer" onClick={() => window.history.back()}/>

            <div className="flex flex-row self-start gap-2 items-center mt-5">
                <img src={laurence} alt="Profile" className="w-20 h-20 rounded-full border-2 border-white mt-3" />
                <div className="flex flex-col">
                <h1 className="text-white text-lg font-semibold mt-2">Laurence</h1>
                <p className="text-green-300 text-sm"> Online</p>
                </div>
            </div>

            <h1 className="text-lg font-semibold self-start text-white">Required</h1>
            <p className="text-green-300 text-sm flex self-start">Be as descriptive as possible</p>

            <form className="flex flex-col w-full gap-2 mt-5" onSubmit={(e) => e.preventDefault()}>
            <input
            type="text"
            placeholder="Title"
            name="Title"
            value={listing.Title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-gray-300 rounded mt-2"
            />

            <input
            type="text"
            placeholder="Description"
            name="Description"
            value={listing.Description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-gray-300 rounded mt-2"
            />

            <input
            type="text"
            placeholder="Price"
            name="Price"
            value={listing.Price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-gray-300 rounded mt-2"
            />

            <input
            type="text"
            placeholder="Category"
            name="Category"
            value={listing.Category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-gray-300 rounded mt-2"
            />

            <button type="submit" className="bg-green-500 text-white p-2 px-8 rounded mt-3 duration-300 hover:bg-green-600">Submit</button>
            </form>
    
        </div>
        <div className="flex flex-col w-screen h-full items-center justify-center gap-2">
        <div className="bg-black/50 w-96 h-96 flex flex-col items-center justify-center gap-2 rounded-lg">
            <h1 className="text-white">Hello</h1>
        </div>
        </div>
        </div>
        </>
    )
}