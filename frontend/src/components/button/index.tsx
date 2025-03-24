import { IButton } from "./type"

export const Button = ({icon, text, size, buttonType}: IButton) => {
    return (
        <button
            className={`${buttonType == "outline"? "text-white border" :"bg-white text-black"} w-full flex gap-2 items-center justify-center font-semibold text-xs py-3 rounded `}>
            {icon} {text}
            
            </button>
    )
}