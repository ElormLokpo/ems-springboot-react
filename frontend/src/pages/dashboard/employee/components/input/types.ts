import { ReactElement } from "react";


export interface IInput{
    label?:string, 
    placeholder: string,
    icon?: ReactElement,
    type?: string,

}

export interface ISearch extends IInput{

}