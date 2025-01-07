import { AuthForm } from "./components/form/auth-form"
import { FaUsers } from "react-icons/fa";

export const AuthPage = ()=>{
    return(
        <div className="h-screen w-screen flex flex-col items-center justify-between p-5">
            <div className="flex gap-2 items-center font-semibold">
                <p className="text-emerald-500"><FaUsers /></p>
                <p>EMS</p>    
            </div>

            <div>
                <AuthForm />
            </div>
            <div className="text-center text-xs">
                <p className="">Kindly use the email: sample@gmail.com and password:12345678</p>
                <p className="font-light">Developed by benedictdev@gmail.com</p>
            </div>
        </div>
    )
}