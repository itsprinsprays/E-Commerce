import Card from "./Card"
import Product from "./Product";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { sablay, polo, book, PE, PEPants, CrimPantsBacoor, CrimPoloBacoor, EducUnif, EducUnif1, PsycUnif, laurence } from "../assets";

const products = [
  { images: [sablay, polo, book, PE], title: "Pajah Sablay", price: "PHP500", picture: laurence, name: "Prince Benitez", gmail: "princejediel.benitez@cvsu.edu.ph", campus: "Imus", details: {1: "Medium", 2: "Twice Nagamit", 3: "Hindi Kupas"} },
  { images: [polo], title: "Polo Shirt", price: "PHP300.99", name: "Renz Borromeo", picture: laurence, gmail: "renz.borromeo@cvsu.edu.ph", campus: "Indang", details: {1: "Large", 2: "Brand New", 3: "Pwede sa Maarte"} },
  { images: [book], title: "NSTP Shirt", price: "PHP250.00", name: "Wendel Tuazon", picture: laurence, gmail: "wendel.tuazon@cvsu.edu.ph", campus: "Gentri", details: {1: "Small", 2: "Brand New", 3: "Pwede sa Maselan"} }, 
  { images: [PE], title: "PE Uniform Set", price: "PHP500.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Dasmarinas" },
  { images: [PEPants], title: "PE Pants", price: "PHP200", name: "Ryhlle Cabatac", gmail: "ryhllevincent.cabatac@cvsu.edu.ph", campus: "Bacoor" },
  { images: [CrimPantsBacoor], title: "Criminology Pants", price: "PHP350.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Carmona" },
  { images: [EducUnif], title: "Education Uniform", price: "PHP400.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Trece" },
  { images: [EducUnif1], title: "Education Uniform", price: "PHP400.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Rosario" },
  { images: [PsycUnif], title: "Psychology Uniform", price: "PHP300.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Naic" },
  { images: [CrimPoloBacoor], title: "Criminology Polo", price: "PHP250.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Imus" }
]


export default function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function show(item) {
    setSelectedProduct(item);
  }

  function closeProduct() {
    setSelectedProduct(null);
  }

  return (
    <>
   <div className="h-10 px-2 py-3 my-3 border items-center flex flex-row rounded bg-white text-black gap-2 flex sm:hidden">
          <CiSearch className="text-gray-400 text-xl shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none mx-1 w-full"
            />
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((item, index) => (
          <Card key={index} {...item} onClick={() => show(item)}/>
        ))}

    </div>

          {selectedProduct && <Product product={selectedProduct} onClose={closeProduct} />}

    </>
  )
}
