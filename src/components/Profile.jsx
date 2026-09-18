import laurence from "../assets/laurence.jpg"

export default function Profile() {
    return (    
        <>
        <div className="flex flex-col relative">

            <div className="bg-[green] h-50 w-full flex justify-center items-center"> </div>

            <div className=" h-full p-9 ">
                <div className="bg-white h-48 w-48 rounded-full p-1.5 absolute top-20 left-1/2 transform -translate-x-1/2 ">  

                    <img src={laurence} alt="Profile" className="h-full w-full rounded-full ring-4 ring-green-500" />
                    
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">Laurence Caparros</h1>
                <h1 className="text-2xl ">Imus Campus</h1>
            </div>
        </div>
        </>

 

    )
}