import Card from "./Card"
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { sablay, polo, book, PE, PEPants, CrimPantsBacoor, CrimPoloBacoor, EducUnif, EducUnif1, PsycUnif } from "../assets";

const products = [
  { image: sablay, title: "Pajah Sablay", price: "PHP500", name: "Prince Benitez", gmail: "princejediel.benitez@cvsu.edu.ph", campus: "Imus" },
  { image: polo, title: "Polo Shirt", price: "PHP300.99", name: "Renz Borromeo", gmail: "renz.borromeo@cvsu.edu.ph", campus: "Indang" },
  { image: book, title: "NSTP Shirt", price: "PHP250.00", name: "Wendel Tuazon", gmail: "wendel.tuazon@cvsu.edu.ph", campus: "Gentri" },
  { image: PE, title: "PE Uniform Set", price: "PHP500.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Dasmarinas" },
  { image: PEPants, title: "PE Pants", price: "PHP200", name: "Ryhlle Cabatac", gmail: "ryhllevincent.cabatac@cvsu.edu.ph", campus: "Bacoor" },
  { image: CrimPantsBacoor, title: "Criminology Pants", price: "PHP350.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Carmona" }, 
  { image: EducUnif, title: "Education Uniform", price: "PHP400.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Trece" },
  { image: EducUnif1, title: "Education Uniform", price: "PHP400.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Rosario" },
  { image: PsycUnif, title: "Psychology Uniform", price: "PHP300.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Naic" },
  { image: CrimPoloBacoor, title: "Criminology Polo", price: "PHP250.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph", campus: "Imus" }
]



function show() {
  setShowProduct(true);
}

export default function Dashboard() {
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

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" onClick={show}>
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}

     
    </div>
    </>
  )
}
