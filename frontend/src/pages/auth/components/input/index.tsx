import { IAuthInput } from "./types"

export const AuthInput = ({ label, placeholder, icon,type }: IAuthInput) => {
    return <div>
        <label className="text-xs mb-2">{label}:</label>
        <div className="flex gap-2 px-2 items-center border bg-stone-800 border border-stone-600 rounded p-1 text-xs">
            {icon}
            <input className="w-full focus:outline-none bg-transparent py-2" placeholder={placeholder} type={type}/>
        </div>

    </div>
}