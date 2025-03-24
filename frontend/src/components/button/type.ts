import { ReactElement } from "react";

export interface IButton{
    icon?:ReactElement,
    text :string,
    size?: string,
    buttonType?:string
}