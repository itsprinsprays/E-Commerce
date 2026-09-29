import { FaArrowLeft, FaArrowRight, FaFacebookMessenger  } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaBackwardStep } from "react-icons/fa6";
import { useState } from "react";
export default function Product({ product, onClose }) {

  const [pictureIndex, setPictureIndex] = useState(0);


  function nextImage() {
      setPictureIndex((prev) => (prev + 1) % product.images.length);
  }

  function prevImage() {
    setPictureIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  }

  return (
    <>
      <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg h-100 w-140 flex flex-wrap">
          
          <FaBackwardStep className="bg-black text-white h-8 w-8 rounded p-1" onClick={onClose}/> 

          <div className="flex justify-between ">
            <div className="flex flex-col">
              <div className="p-2 border rounded-lg w-64 h-64 overflow-hidden mx-4">
                <img src={product.images[pictureIndex]} alt={product.title} className="w-full h-full object-contain bg-[green]" /> 
              </div>

              <div className="flex flex-row items-center justify-center gap-4  py-4 text-2xl text-white">
                <FaArrowLeft className="bg-black rounded-full h-full w-8 p-2" onClick={prevImage}/>
                <FaArrowRight className="bg-black rounded-full h-full w-8 p-2" onClick={nextImage}/>
              </div>
            </div>

            <div className=" w-120 h-full flex flex-col items-start px-4 ">
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-[green] text-xl">{product.price}</p>
              <p className="font-bold pt-3 text-lg">Details</p>
              <p>{product.details[1]}</p>
              <p>{product.details[2]}</p>
              <p>{product.details[3]}</p>

              <div className="flex items-center justify-center bg-[green] text-[white] p-2 w-50 gap-1 mt-5 transition-color duration-300 hover:bg-[#02E49B] hover:text-black rounded shadow-lg">
                <FaFacebookMessenger /> <button onClick={prevImage}>Send Message</button>
              </div>

              <div className="font-bold bg-[green] my-2 h-full rounded-lg p-2 w-50 mt-2 shadow-lg">
                <h1 className="text-white">Seller Information:</h1>
                <div className="flex flex-row gap-2 text-white">
                  <img src={product.picture} className="h-10 rounded-full" />
                  <div>
                    <p>{product.name}</p>
                    <IoLocation className="inline"/> <span className="font-semibold">{product.campus} Campus</span>
                  </div>
                </div>
              </div>     

            </div>



          </div>
        </div>  
      </div>
    </>
  )
}