import MobileLogin from "./MobileLogin.jsx";
import DesktopLogin from "./DesktopLogin.jsx";

export default function Login() {

 
    return (
        <>

    <div className="block sm:hidden">
        <MobileLogin />
    </div>

    <div className="hidden sm:block">
        <DesktopLogin />
    </div>
                    
        
                
            
        </>
    )
}