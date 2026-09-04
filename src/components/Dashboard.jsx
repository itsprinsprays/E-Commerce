import hero from "../assets/hero.png"
import sablay from "../assets/sablay.jpg"
import Card from "./Card"

export default function Dashboard() {
  return (
    <div className="flex flex-row gap-5 justify-center items-center mt-10">
      <Card image={hero} title="Polo" bgColor="bg-white" />
      <Card image={sablay} title="Sablay" bgColor="bg-[white]" />
      <Card title="NSTP Shirt" bgColor="bg-[#02E49B]" />
      <Card title="PE Uniform" bgColor="bg-[#02E49B]" />
    </div>
  )
}
