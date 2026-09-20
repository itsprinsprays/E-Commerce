import laurence from "../assets/laurence.jpg"
import imuss from "../assets/imuss.jpg"
import { FaFacebookMessenger, FaShare  } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { sablay, polo, book, PE } from "../assets";
import CardProfile from "./CardProfile";
import Card from "./Card";

export default function Profile() {

    const product = [
        { image: sablay, title: "Pajah Sablay", price: "PHP500", name: "Prince Benitez", gmail: "princejediel.benitez@cvsu.edu.ph" },
          { image: polo, title: "Polo Shirt", price: "PHP300.99", name: "Renz Borromeo", gmail: "renz.borromeo@cvsu.edu.ph" },
          { image: book, title: "NSTP Shirt", price: "PHP250.00", name: "Wendel Tuazon", gmail: "wendel.tuazon@cvsu.edu.ph" },
          { image: PE, title: "PE Uniform Set", price: "PHP500.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph" }
    ]
    
    return (    
        <>
        <div className="flex flex-col relative">

            <div className="bg-[green] h-50 w-full flex justify-center items-center bg-cover" style={{backgroundImage: `url(${imuss})`}}> </div>
            {/* <div className="bg-[green] h-50 w-full flex justify-center items-center bg-cover"   > </div> */}
            <div className=" h-full p-9 ">
                <div className="bg-white h-48 w-48 rounded-full p-1.5 absolute top-20 left-1/2 transform -translate-x-1/2 ">  

                    <img src={laurence} alt="Profile" className="h-full w-full rounded-full ring-4 ring-green-500" />
                    
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">Laurence Caparros</h1>
                <h1 className="text-2xl ">Imus Campus</h1>
                <h1>4.9 (102 Reviews)</h1>
            </div>

            <div className="flex flex-row justify-center items-center gap-1 sm:gap-4 my-2">
                <button className="border p-1 w-40 rounded bg-[green] text-white flex justify-center items-center gap-2 transition-color duration-300 hover:bg-[#02E49B]">
                    <FaFacebookMessenger /> Message</button>
                <button className="flex justify-center items-center gap-2 border w-40 p-1 text-[green] rounded transition-color duration-300 hover:bg-[green] hover:text-white">
                    <FaShare /> Profile</button>
                <button className="flex items-center justify-center gap-2 w-40 p-1 border rounded text-[green] transition-color duration-300 hover:bg-[green] hover:text-white">
                    <MdReport /> User</button>
            </div>

            <div className="bg-[gray] h-1 mt-4"></div>
            <h1 className="flex justify-center text-xl my-1">Listing</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {product.map((item, index) => (
                      <CardProfile key={index} {...item} />
                    ))}
                </div>

        </div>
        </>

 

    )
}