export default function Card({ image, title, bgColor }) {
  return (
    <div 
      className={`w-[25%] h-[300px] ${bgColor} items-center justify-center flex flex-col gap-2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      {image && <img src={image} alt={title} className="w-full h-[50%]" />}
      <p className="text-lg font-semibold border-t w-full text-center">{title}</p>
    </div>
  )
}
