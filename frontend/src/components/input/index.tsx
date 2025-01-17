import { ICBInput, IInput, ISearch, ISelect } from "./types"

export const SearchInput = ({ placeholder, icon }: ISearch) => {
    return <div>

        <div className="flex gap-2 px-2 items-center border bg-stone-800 border border-stone-600 rounded p-1 text-xs">
            {icon}
            <input className="w-full focus:outline-none bg-transparent py-1" placeholder={placeholder} />
        </div>

    </div>
}


export const CInput = ({ label, color, placeholder, type, onChange, name, register, errors, isTextArea = false }: IInput) => {
    let base_style = `flex gap-2 px-2 items-center mb-1 border ${color ? color : "bg-stone-800"} rounded p-1 text-xs`
    let def_style = `${base_style} border border-stone-800`
    let error_style = `${base_style} border border-red-500`

    return <div>
        <label className={errors[`${name}`] ? "text-xs mb-2 text-red-500" : "text-xs mb-2"}>{label}:</label>
        <div className={errors[`${name}`] ? error_style : def_style}>
            {isTextArea ? <textarea {...register(`${name}`)} rows={5} className="w-full focus:outline-none bg-transparent py-1" placeholder={placeholder} />
                : <input {...register(`${name}`)} className="w-full focus:outline-none bg-transparent py-1" name={name} onChange={onChange} placeholder={placeholder} type={type} />

            }
        </div>
        {errors[`${name}`] && <p className="text-xs text-red-500">{errors[`${name}`]?.message as string}</p>}

    </div>
}

export const CBInput = ({ label, isError, errorMessage, placeholder, type, onChange, name, isTextArea = false }: ICBInput) => {
    let base_style = "flex gap-2 px-2 items-center mb-1 border bg-stone-800 rounded p-1 text-xs"
    let def_style = `${base_style} border border-stone-800`
    let error_style = `${base_style} border border-red-500`

    return <div>
        <label className={isError ? "text-xs mb-2 text-red-500" : "text-xs mb-2"}>{label}:</label>
        <div className={isError ? error_style : def_style}>
            {isTextArea ? <textarea rows={5} className="w-full focus:outline-none bg-transparent py-1" placeholder={placeholder} />
                : <input className="w-full focus:outline-none bg-transparent py-1" name={name} onChange={onChange} placeholder={placeholder} type={type} />

            }
        </div>
        {isError && <p className="text-xs text-red-500">{errorMessage}</p>}

    </div>
}

export const CSelect = ({ label, optionsArr, register, errors, name }: ISelect) => {
    let base_style = "flex gap-2 px-2 items-center border mb-1 bg-stone-800 rounded p-1 text-xs"
    let def_style = `${base_style} border border-stone-800`
    let error_style = `${base_style} border border-red-500`

    return <div>
        <label className={errors[`${name}`] ? "text-xs mb-2 text-red-500" : "text-xs mb-2"}>{label}:</label>
        <div className={errors[`${name}`] ? error_style : def_style}>
            <select className="w-full mb-1 focus:outline-none bg-transparent py-1"  {...register(`${name}`)} defaultValue={optionsArr[0].value}>
                {optionsArr.map((item, key) => <option className="bg-stone-700 text-white" value={item.value} key={key}>{item.display}</option>)}
            </select>

        </div>
        {errors[`${name}`] && <p className="text-xs text-red-500">{errors[`${name}`]?.message as string}</p>}


    </div>
}


