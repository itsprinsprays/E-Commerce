import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";
export default function Product({ product, onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg h-100 w-140 flex flex-wrap">
          
          <FaBackwardStep className="bg-black text-white h-8 w-8 rounded p-1" onClick={onClose}/> 

          <div className="flex justify-between ">
            <div className="flex flex-col">
              <div className="p-2 border rounded-lg w-64 h-64 overflow-hidden mx-4">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain bg-[green]" />
              </div>

              <div className="flex flex-row items-center justify-center gap-4  py-2 text-2xl text-white">
                <FaArrowLeft className="bg-black rounded-full h-full w-8 p-2" />
                <FaArrowRight className="bg-black rounded-full h-full w-8 p-2" onClick={product.image1}/>
              </div>
            </div>

            <div className=" w-120 h-full flex flex-col items-start px-10 py-5 ">
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-[green] text-xl">{product.price}</p>
              <p className="font-bold pt-3 text-lg">Details</p>
              <p>{product.details[1]}</p>
              <p>{product.details[2]}</p>
              <p>{product.details[3]}</p>
            </div>



          </div>
        </div>  
      </div>
    </>
  )
}