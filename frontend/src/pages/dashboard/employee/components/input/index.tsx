import { IInput, ISearch } from "./types"

export const SearchInput = ({ placeholder, icon}: ISearch) => {
    return <div>
        
        <div className="flex gap-2 px-2 items-center border bg-stone-800 border border-stone-600 rounded p-1 text-xs">
            {icon}
            <input className="w-full focus:outline-none bg-transparent py-1" placeholder={placeholder} />
        </div>

    </div>
}


export const CInput = ({ label, placeholder,type }: IInput) => {
    return <div>
        <label className="text-xs mb-2">{label}:</label>
        <div className="flex gap-2 px-2 items-center border bg-stone-800 border border-stone-600 rounded p-1 text-xs">
          
            <input className="w-full focus:outline-none bg-transparent py-1" placeholder={placeholder} type={type}/>
        </div>

    </div>
}

export const CTextArea = ({ label, placeholder,type }: IInput) => {
    return <div>
        <label className="text-xs mb-2">{label}:</label>
        <div className="flex gap-2 px-2 items-center border bg-stone-800 border border-stone-600 rounded p-1 text-xs">
          
            <textarea rows={5} className="w-full focus:outline-none bg-transparent py-1" placeholder={placeholder} />
        </div>

    </div>
}