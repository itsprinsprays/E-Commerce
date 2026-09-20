import { CiUser } from "react-icons/ci";

export default function CardProfile({ image, title, price }) {

    return (
    <>
        <div className="w-full bg-[white] flex flex-col rounded overflow-hidden hover:shadow-xl transition-shadow duration-300 gap-2">
            {image && <img src={image} className="w-full h-40 sm:h-48 object-cover border-2 border-gray-300" />}

            <div>
                <h1 className="px-2 text-lg font-bold">{title}</h1>
                <p className="px-2 pb-2">{price}</p>
            </div>
        </div>
              
    </>
    )
}
