import { useState } from "react";
import { SignInForm, SignUpForm} from "./components/form/auth-form"


export const AuthPage = () => {
    const [currentForm, setCurrentForm] = useState("signin");

    return (
        <div className="gap-5 h-screen text-stone-300 bg-black p-10 flex items-center justify-center">

            <div className="flex flex-col h-screen p-20 justify-between">
                <div></div>
                <div className="w-[25rem]">
                    {currentForm == "signup" ? <SignUpForm setCurrentForm={setCurrentForm} /> : <SignInForm setCurrentForm={setCurrentForm} />}
                </div>

                <div className="text-center">
                    <p className="text-sm font-light mb-1">Kindly use credentials email: <span className="font-semibold">admin@gmail.com</span> password: <span className="font-semibold">12345678</span></p>
                    <p className="text-sm font-light">Developed by benedictdev31@gmail.com</p>

                </div>
            </div>
        </div>
    )
}