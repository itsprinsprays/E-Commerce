import Card from "./Card"
import { sablay, polo, book, PE, PEPants, CrimPantsBacoor, CrimPoloBacoor, EducUnif, EducUnif1, PsycUnif } from "../assets";

const products = [
  { image: sablay, title: "Pajah Sablay", price: "PHP500", name: "Prince Benitez", gmail: "princejediel.benitez@cvsu.edu.ph" },
  { image: polo, title: "Polo Shirt", price: "PHP300.99", name: "Renz Borromeo", gmail: "renz.borromeo@cvsu.edu.ph" },
  { image: book, title: "NSTP Shirt", price: "PHP250.00", name: "Wendel Tuazon", gmail: "wendel.tuazon@cvsu.edu.ph" },
  { image: PE, title: "PE Uniform Set", price: "PHP500.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph" },
  { image: PEPants, title: "PE Pants", price: "PHP200", name: "Ryhlle Cabatac", gmail: "ryhllevincent.cabatac@cvsu.edu.ph" },
  { image: CrimPantsBacoor, title: "Criminology Pants", price: "PHP350.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph" }, 
  { image: EducUnif, title: "Education Uniform", price: "PHP400.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph" },
  { image: EducUnif1, title: "Education Uniform", price: "PHP400.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph" },
  { image: PsycUnif, title: "Psychology Uniform", price: "PHP300.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph" },
  { image: CrimPoloBacoor, title: "Criminology Polo", price: "PHP250.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph" }
]

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
    </div>
  )
}
