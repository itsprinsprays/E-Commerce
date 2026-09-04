export default function Card({ image, title, bgColor }) {
  return (
    <div 
      className={`w-[25%] h-[400px] ${bgColor} items-center justify-center flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
        {image && <img src={image} className="w-full h-1/2 object-cover" />}
           <div className="h-1/2 flex items-center justify-center w-full border-t">
        <p className="text-lg font-semibold text-center">{title}</p>
      </div>
    </div>
  )
}
