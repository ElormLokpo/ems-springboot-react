import { IInput, ISearch, ISelect } from "./types"

export const SearchInput = ({ placeholder, icon}: ISearch) => {
    return <div>
        
        <div className="flex gap-2 px-2 items-center border bg-stone-800 border border-stone-600 rounded p-1 text-xs">
            {icon}
            <input className="w-full focus:outline-none bg-transparent py-1" placeholder={placeholder} />
        </div>

    </div>
}


export const CInput = ({ label, placeholder,type,onChange, name }: IInput) => {
    let def_style = "flex gap-2 px-2 items-center border bg-stone-900 border border-stone-800 rounded p-1 text-xs"
    let error_style = ""

    return <div>
        <label className="text-xs mb-2">{label}:</label>
        <div className={def_style}>
            <input className="w-full focus:outline-none bg-transparent py-1" name={name} onChange={onChange} placeholder={placeholder} type={type}/>
        </div>

    </div>
}

export const CSelect = ({ label, optionsArr }: ISelect) => {
    let def_style = "flex gap-2 px-2 items-center border bg-stone-800 border border-stone-600 rounded p-1 text-xs"
    let error_style = ""

    return <div>
        <label className="text-xs mb-2">{label}:</label>
        <div className={def_style}>
            <select className="w-full focus:outline-none bg-transparent py-1">
                {optionsArr.map((item,key)=><option className="bg-stone-700 text-white" value={item.value} key={key}>{item.display}</option>)}
            </select>
        </div>

    </div>
}


export const CTextArea = ({ label, placeholder,type }: IInput) => {
    let def_style = "flex gap-2 px-2 items-center border bg-stone-800 border border-stone-600 rounded p-1 text-xs"
    let error_style = ""

    return <div>
        <label className="text-xs mb-2">{label}:</label>
        <div className={def_style}>
            <textarea rows={5} className="w-full focus:outline-none bg-transparent py-1" placeholder={placeholder} />
        </div>

    </div>
}