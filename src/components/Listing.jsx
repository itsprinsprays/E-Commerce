import { useState } from "react";
import laya from "../assets/laya.png";

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
            className="flex min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${laya})` }}>

        <div className="bg-black/50  w-50 h-screen flex flex-col items-center p-2">
            <h1 className="text-lg font-semibold self-start text-white">Required</h1>
            <p className="text-green-300 text-sm flex self-start">Be as descriptive as possible</p>

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
    
        </div>
        </div>
        </>
    )
}