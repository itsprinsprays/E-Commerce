export default function Product({ product, onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center h-150 w-200">
          <div className="flex justify-between">
          <div className="p-4 h-full border rounded-lg">
          <img src={product.image} alt={product.title} className="w-128 h-128 object-contain mx-auto" />
          </div>
          <div className=" w-120 h-full flex flex-col items-start px-5 py-5 ">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-[green] text-xl">{product.price}</p>
          <p>Details</p>
          <p>Details 1</p>
          <p>Details 2</p>
          <p>Details 3</p>
          <p>Details 4</p>
          <button onClick={onClose}>
            Close
          </button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}