import hero from "../assets/hero.png"
import Card from "./Card"

export default function Dashboard() {
  return (
    <div className="flex flex-row gap-5 justify-center items-center mt-10">
      <Card image={hero} title="Uniform" bgColor="bg-white" />
      <Card image={hero} title="Orders" bgColor="bg-[#02E45B]" />
      <Card title="Cart" bgColor="bg-[#02E49B]" />
      <Card title="Profile" bgColor="bg-[#02E49B]" />
    </div>
  )
}
