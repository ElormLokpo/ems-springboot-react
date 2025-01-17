import { ICButton } from "./types"

export const CButton = ({ style_type, icon, label, handler, size, disabled, isLoading, loadingText }: ICButton) => {
    let base_style = `text-xs flex gap-2 items-center px-2  border rounded ${size == "md" ? "py-2" : "py-1"}`
    let outline_green = `border-emerald-500 text-emerald-500`
    let outline_red = `border-red-500 text-red-500`
    let outline_style = `${base_style} hover:bg-stone-700 ${style_type.split(" ")[1] == "outline-green" && outline_green} ${style_type.split(" ")[1] == "outline-red" && outline_red} ${style_type.split(" ")[1] == "outline-def" && "border-stone-400 text-stone-400"}`


    let filled_style = `${base_style}  bg-emerald-500 hover:bg-emerald-600 border-emerald-400 font-semibold`
    return <button type="button" className={style_type.split(" ")[0] == "outline" ? outline_style : filled_style} onClick={handler}>
        {
            isLoading ? <div>{loadingText}</div> : <div className="flex gap-2 items-center">
                {icon} {label}
            </div>
        }

    </button>
}