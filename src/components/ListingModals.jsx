import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight,   } from "react-icons/fa";



export default function ListingModals({ product, onClose }) {
    

    const [pictureIndex, setPictureIndex] = useState(0);

     function nextImage() {
      setPictureIndex((prev) => (prev + 1) % product.images.length);
    }

    function prevImage() {
    setPictureIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }

    return (
        <div className="fixed inset-0 z-50 flex justify-center
                        items-center bg-black/50">

            <div className="w-100 bg-white rounded-3xl shadow-xl p-4">

                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">
                        Product Details
                    </h1>

                    <button onClick={onClose}>
                        <IoMdClose className="text-2xl" />
                    </button>
                </div>

                <img
                    src={product.images[pictureIndex]}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-xl my-4"
                />

                <div className="flex flex-row items-center justify-center gap-4 py-4 text-2xl text-white">
                <FaArrowLeft className="bg-black rounded-full h-full w-8 p-2" onClick={prevImage}/>
                <FaArrowRight className="bg-black rounded-full h-full w-8 p-2" onClick={nextImage}/>
              </div>

                <p><strong>Seller:</strong> {product.name}</p>
                <p><strong>Product:</strong> {product.title}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Size:</strong> {product.details[1]}</p>
                <p><strong>Condition:</strong> {product.details[2]}</p>
                <p><strong>Description:</strong> {product.details[3]}</p>

            </div>
        </div>
    );
}