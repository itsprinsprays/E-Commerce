import hero from "../assets/hero.png"
import sablay from "../assets/sablay.jpg"
import Card from "./Card"

export default function Dashboard() {
  return (
    <div className="flex flex-row gap-5 justify-center items-center mt-10">
      <Card image={sablay} title="Pajah Sablay" price="PHP500" name="Prince Benitez" gmail="princejediel.benitez@cvsu.edu.ph" />
      <Card image={sablay} title="Sablay" price="PHP39.99" />
      <Card title="NSTP Shirt" price="$24.99" />
      <Card title="PE Uniform" price="$49.99" />
    </div>
  )
}
