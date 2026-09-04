import hero from "../assets/hero.png"

export default function Dashboard() {

    return (
        <>
    <div className="flex flex-row gap-5 justify-center items-center mt-10">
        <div className="w-[25%] h-[300px] bg-[white] items-center justify-center flex flex-col gap-2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={hero} alt="Hero" className="w-full h-[50%]"/>
            <p className="text-lg font-semibold border-t-1 w-full">Uniform</p>
        </div>

        <div className="w-[25%] h-[200px] bg-[#02E49B]">Image</div>
        <div className="w-[25%] h-[200px] bg-[#02E49B]">Image</div>
        <div className="w-[25%] h-[200px] bg-[#02E49B]">Image</div>
    </div>

        </>
    )

}