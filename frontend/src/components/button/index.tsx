import { IButton } from "./type"

export const Button = ({ icon, text, size, buttonType, buttonStyleType }: IButton) => {
    return (
        <button
            type={buttonType}
            className={`${buttonStyleType == "outline" ? "text-white border hover:bg-zinc-700" : "bg-white text-black hover:bg-zinc-100"} hover:cursor-pointer w-full flex gap-2 items-center justify-center font-semibold text-xs py-3 rounded `}>
            {icon} {text}
        </button>
    )
}