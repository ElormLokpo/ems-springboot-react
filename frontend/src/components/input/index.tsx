import { IInput } from "./type"


export const Input = ({ label, placeholder, register, errors, name, type }: IInput) => {
    const inputStyle = `border mb-1 text-xs p-2 bg-zinc-800 rounded  ${errors[`${name}`] ? `border-red-600 text-red-500 focus:outline-red-500` : ` border-zinc-500`}`

    return (
        <div className={`flex flex-col ${errors[`${name}`] && `text-red-600`} `}>
            <label className="text-xs mb-1">{label}:</label>
            <input {...register(`${name}`)} type={type} placeholder={placeholder} className={inputStyle} />
            {errors[`${name}`] && <p className="text-red-600 text-xs">{errors[`${name}`].message}</p>}
        </div>
    )
}