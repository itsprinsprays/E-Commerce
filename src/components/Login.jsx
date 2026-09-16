import MobileLogin from "./MobileLogin.jsx";
import DesktopLogin from "./DesktopLogin.jsx";
import laya from "../assets/laya.jpg";

export default function Login() {
    return (
        <div>
            <div className="block lg:hidden">
                <MobileLogin />
            </div>

            <div className="hidden lg:block">
                <DesktopLogin />
            </div>
        </div>
    )
}