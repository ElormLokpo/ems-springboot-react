import { ReactElement } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";


export interface IInput {
    label?: string,
    placeholder?: string,
    icon?: ReactElement,
    type?: string,
    value?: string
    name: string,
    isTextArea?:boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    color?: string, 
}

export interface ICBInput extends Partial<IInput>{
    isError?:boolean,
    errorMessage?:string
}

export interface ISearch extends IInput {

}


interface ISelectOption {
    value: string,
    display: string
}

export interface ISelect extends IInput {
    optionsArr: ISelectOption[],

}