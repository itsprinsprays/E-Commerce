import hero from "../assets/hero.png"
import sablay from "../assets/sablay.jpg"
import Card from "./Card"

export default function Dashboard() {
  return (
    <div className="flex flex-row gap-5 justify-center items-center mt-10">
      <Card image={hero} title="Polo" price="$29.99" name="Prince Benitez" />
      <Card image={sablay} title="Sablay" price="$39.99" />
      <Card title="NSTP Shirt" price="$24.99" />
      <Card title="PE Uniform" price="$49.99" />
    </div>
  )
}
