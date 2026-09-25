
export default function Product({ product, onClose }) {
  return (
    <div className="fixed inset-0 ...">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      {/* etc */}
      <button onClick={onClose}>Close</button>
    </div>
  )
}