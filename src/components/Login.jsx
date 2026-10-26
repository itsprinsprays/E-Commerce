import MobileLogin from "./Modules/Login/MobileLogin.jsx";
import DesktopLogin from "./Modules/Login/DesktopLogin.jsx";

export default function Login() {
    return (
        <div>
             
        <div className="absolute inset-0 bg-white/50"></div>
        
            <div className="block lg:hidden">
                <MobileLogin />
            </div>

            <div className="hidden lg:block">
                <DesktopLogin />
            </div>
        </div>
    )
}