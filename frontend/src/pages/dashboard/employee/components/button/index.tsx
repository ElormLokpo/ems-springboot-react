import { ICButton } from "./types"

export const CButton = ({style_type, icon, label, handler, size}:ICButton)=>{
    let base_style=`text-xs flex gap-2 items-center px-2  border rounded ${size == "md" ? "py-2": "py-1"  }`
    let outline_style= `${base_style} hover:bg-stone-700 border-stone-400 text-stone-400`
    let filled_style = `${base_style} bg-emerald-500 hover:bg-emerald-600 border-emerald-400 font-semibold`
    return <button className={style_type=="outline"?outline_style:filled_style} onClick={handler}>{icon} {label}</button>
}