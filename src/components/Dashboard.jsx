import sablay from "../assets/sablay.jpg"
import polo from "../assets/polo.jpg"
import book from "../assets/book.jpg"
import PE from "../assets/PE.jpg"
import Card from "./Card"

const products = [
  { image: sablay, title: "Pajah Sablay", price: "PHP500", name: "Prince Benitez", gmail: "princejediel.benitez@cvsu.edu.ph" },
  { image: polo, title: "Polo Shirt", price: "PHP300.99", name: "Renz Borromeo", gmail: "renz.borromeo@cvsu.edu.ph" },
  { image: book, title: "NSTP Shirt", price: "$24.99", name: "Wendel Tuazon", gmail: "wendel.tuazon@cvsu.edu.ph" },
  { image: PE, title: "PE Uniform", price: "$49.99", name: "Robert Arpia", gmail: "robert.arpia@cvsu.edu.ph" },
]

export default function Dashboard() {
  return (
    <div className="grid grid-cols-4 gap-5">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
    </div>
  )
}
