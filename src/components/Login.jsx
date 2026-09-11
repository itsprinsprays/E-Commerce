import MobileLogin from "./MobileLogin.jsx";
import DesktopLogin from "./DesktopLogin.jsx";

export default function Login() {

 
    return (
        <>

        <div className="block lg:hidden">
            <MobileLogin />
        </div>

        <div className="hidden lg:block">
            <DesktopLogin />
        </div>
                     
        </>
    )
}