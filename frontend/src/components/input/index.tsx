import { IInput } from "./type"


export const Input = ({ label, placeholder }: IInput) => {
    return (
        <div className="flex flex-col">
            <label className="text-xs mb-1">{label}:</label>
            <input placeholder={placeholder} className="border text-xs p-2 bg-zinc-800 rounded border-zinc-500" />
        </div>
    )
}