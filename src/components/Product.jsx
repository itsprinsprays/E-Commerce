export default function Product({ product, onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-white/75 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center h-150 w-250">
          <div className="p-5 bg-[green] h-64 w-64">
          <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto" />
          </div>
          <h2 className="">{product.title}</h2>
          <p className="">{product.price}</p>
          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  )
}