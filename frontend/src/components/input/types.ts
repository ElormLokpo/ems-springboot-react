import { ReactElement } from "react";


export interface IInput{
    label?:string, 
    placeholder?: string,
    icon?: ReactElement,
    type?: string,
    value?:string
    name?:string,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

export interface ISearch extends IInput{

}


interface ISelectOption{
    value: string, 
    display:string
}

export interface ISelect extends IInput{
    optionsArr:ISelectOption[],

}