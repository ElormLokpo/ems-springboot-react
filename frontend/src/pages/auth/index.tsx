import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { FlipWords } from "@/ui/flip-words"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { RegisterSchemaType, LoginSchemaType, RegisterSchema, LoginSchema } from "@/schemas";
import {toast} from "sonner"


let authFields = [
    { title: "email", label: "Email", placeholder: "Enter valid email" },
    { title: "password", label: "Password", placeholder: "*********", type: "password" }
]

const AuthForm = ({ setCurrentForm, currentForm }: any) => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType | LoginSchemaType>({
        resolver: zodResolver(currentForm == "register" ? RegisterSchema : LoginSchema)
    })

    const submitHandler = (authData: RegisterSchemaType | LoginSchemaType) => {
        console.log("authData", authData)

        toast.success("Bread")
        
    }

    return (
        <div className="border-r border-zinc-700 pr-10">
            <div className=" w-[20rem] p-3 border-zinc-600 rounded-lg  ">
                <p className="mb-1 font-semibold">{currentForm == "register" ? "Create account" : "Log into account"}</p>
                <p className="text-xs font-light mb-4">Kindly fill the form below with the correct credentials to {currentForm == "register" ? "create" : "log into"} account</p>

                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-4">
                        <div className="mb-1">
                            {authFields.map((item, index) => <div className="mb-2">
                                <Input
                                    name={item.title}
                                    key={index}
                                    label={item.label}
                                    register={register}
                                    errors={errors}
                                    placeholder={item.placeholder}
                                    type={item.type && item.type}
                                />
                            </div>)}
                        </div>
                        {currentForm == "login" && <p className="text-xs mb-3">Forgot Password?</p>}

                    </div>

                    <div className="mb-4">
                        <div className="mb-3">
                            <Button buttonType="submit" text={currentForm == "register" ? "Create account" : "Log in"} />
                        </div>
                        <div className="mb-2">
                            <Button icon={<FcGoogle />} buttonStyleType="outline" text="Continue with Google" />
                        </div>


                    </div>
                </form>

                <p onClick={() => setCurrentForm(currentForm == "register" ? "login" : "register")} className="mb-1 text-center text-xs underline hover:cursor-pointer">{currentForm == "register" ? "Already have an account? Login here" : "Don't have an account? Create one"}</p>

            </div>
        </div>
    )
}

export const AuthPage = () => {
    const words = ["startup teams", "small businesses", "co-operations"];
    const [currentForm, setCurrentForm] = useState("register")

    return (
        <div className="bg-background grid grid-cols-3 text-text h-screen bg-zinc-900 text-white py-[10rem] px-[22rem]">
            <div className="flex justify-center items-center p-3 ">
                <AuthForm currentForm={currentForm} setCurrentForm={setCurrentForm} />
            </div>

            <div className="col-span-2">
                <div className="h-[40rem] px-4 flex-col justify-center flex">
                    <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-300 mb-5">
                        Built for
                        <FlipWords words={words} /> <br />
                        for employee management and cordination
                    </div>
                    <div className="mx-auto text-neutral-200 font-light leading-7">
                        {currentForm == "register" ? "Create an account" : "Log into account"} for seamless employee management. Assign tasks, track leaves, and streamline operations effortlessly.
                    </div>
                </div>
            </div>
        </div>
    )
}