import { AuthInput } from "../input"
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { AuthButton } from "../button";

export const AuthForm = () => {
    return (
        <div>
            <div className="text-center mb-3">
                <p className="font-semibold text-lg">Sign In</p>
                <p className="text-xs font-light">Kindly look below for credentials if you do not have an admin account.</p>
            </div>

            <div>
                <div className="mb-3">
                    <AuthInput icon={<MdOutlineEmail />} label="Email" placeholder="Enter email address" type="email" />

                </div>

                <div className="mb-2">
                    <AuthInput icon={<FiLock />} label="Password" placeholder="Password" type="password" />
                </div>

                <div className="mb-5">
                    <p className="text-xs underline">Forgot password?</p>
                </div>

                <AuthButton />
            </div>
        </div>
    )
}