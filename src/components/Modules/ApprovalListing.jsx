import { useState } from "react"
import { FaSchoolFlag  } from "react-icons/fa6";
import ApprovalCard from "../ApprovalCard";
import { polo, laurence, book, PE } from "../../assets";
import ListingModals from "../ListingModals";

        const  student = [
        { images: [polo, book], title: "Polo Shirt", price: "PHP300.99", name: "Renz Borromeo", picture: laurence, details: {1: "Large", 2: "Brand New", 3: "Pwede sa Maarte"} },
        { images: [book], title: "Polo Shirt", price: "PHP250.00", name: "Robert Arpia", picture: laurence, details: {1: "Large", 2: "Brand New", 3: "Pwede sa Maarte"} },
        { images: [PE], title: "Polo Shirt", price: "PHP400.00", name: "Laurence Caparros", picture: laurence, details: {1: "Large", 2: "Brand New", 3: "Pwede sa Maarte"} }
    ];

export default function ApprovalListing() {

    const [selected, setSelected] = useState("");

    const [selectedProduct, setSelectedProduct] = useState(null);

    function show(item) {
        setSelectedProduct(item);
    }

    function closeProduct() {
        setSelectedProduct(null);
    }

    return(
        <>
        <div className="p-4 flex flex-col gap-2">
            <div className="bg-[darkgreen] p-4">
                <label className="text-white">Current Campus</label>
                 <div className="flex items-center justify-center p-4 mx-2 shadow-lg bg-white rounded-2xl">
                    <FaSchoolFlag className="text-2xl"/>
                    <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="outline-none"
                    >
                        
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

            <h1 className="text-3xl">Approval Listing</h1>
            <div>
                {student.map((item, index)=> (
                    <ApprovalCard key={index} {...item} onClick={() => show(item)}/>
                ))}
            </div>

                {selectedProduct && <ListingModals product={selectedProduct} onClose={closeProduct} /> }
        </div>

        </>
    )
}