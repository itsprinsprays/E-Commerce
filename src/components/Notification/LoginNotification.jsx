import { useState } from "react";

export default function Notification() {

const [error, setError] = useState(true);


    return(
        <>
        
        <div className="bg-[red] p-2 w-[250px] text-[white] fixed bottom-5 right-5 border-none rounded shadow-lg">
        
            <h1>Invalid Account Credentials</h1>
        </div>

        </>
    )
}