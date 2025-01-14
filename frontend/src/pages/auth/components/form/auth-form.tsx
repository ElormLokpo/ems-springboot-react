import { AuthInput } from "../input"
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { AuthButton, SocialButton } from "../button";
import { FcGoogle } from "react-icons/fc";
import { IAuthForm } from "./types";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

export const SignInForm = ({ setCurrentForm }: IAuthForm) => {
    return (
        <div>
            <div className="mb-6">
                <p className=" text-lg mb-3"><span className="text-emerald-500">EMS</span> / Sign In</p>
                <p className="text-xs ">Kindly look below for credentials if you do not have an admin account.</p>
            </div>

            <div>
                <div className="mb-3">
                    <AuthInput icon={<MdOutlineEmail />} label="Email" placeholder="Enter email address" type="email" />

                </div>

                <div className="mb-2">
                    <AuthInput icon={<FiLock />} label="Password" placeholder="Password" type="password" />
                </div>

                <div className="mb-8">
                    <p className="text-xs underline">Forgot password?</p>
                </div>


                <div className="">
                    <div className="mb-5">
                        <AuthButton content="Sign In" />
                        <p onClick={() => setCurrentForm("signup")} className="text-sm pt-2 text-center hover:underline hover:cursor-pointer"> Don't have an account? Create one</p>
                    </div>

                    <div className="flex items-center justify-center mb-3">
                        <p className="flex items-center text-center text-xs">Or</p>
                    </div>

                    <div>
                        <SocialButton icon={<FcGoogle />} />
                    </div>
                </div>

            </div>
        </div>
    )
}



export const SignUpForm = ({ setCurrentForm }: IAuthForm) => {
    return (
        <div>
            <div className="mb-8">
                <p className=" text-lg mb-3"><span className="text-emerald-500">EMS</span> / Sign Up</p>
                <p className="text-xs ">Kindly provide details below to create a new account.</p>
            </div>

            <div>
                <div className="mb-2 grid grid-cols-2 gap-3">
                    <AuthInput icon={<FaRegUser />} label="Firstname" placeholder="Enter first name" type="text" />
                    <AuthInput icon={<MdOutlineDriveFileRenameOutline />} label="Lastname" placeholder="Enter last name" type="text" />

                </div>
                <div className="mb-2">
                    <AuthInput icon={<MdOutlineEmail />} label="Email" placeholder="Enter email address" type="email" />

                </div>

                <div className="mb-2">
                    <AuthInput icon={<FiLock />} label="Password" placeholder="Password" type="password" />

                </div>

                <div className="mb-8">
                    <p className="text-xs underline">Forgot password?</p>
                </div>


                <div className="">
                    <div className="mb-5">
                        <AuthButton content="Sign Up"/>
                        <p onClick={() => setCurrentForm("signin")} className="text-sm pt-2 text-center hover:underline hover:cursor-pointer"> Already have an account? Sign in</p>

                    </div>

                    <div className="flex items-center justify-center mb-2">
                        <p className="flex items-center text-center text-xs">Or</p>
                    </div>

                    <div>
                        <SocialButton icon={<FcGoogle />} />
                    </div>
                </div>

            </div>
        </div>
    )
}