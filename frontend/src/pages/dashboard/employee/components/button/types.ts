import { ReactElement } from "react";

export interface ICButton{
    style_type:string, 
    icon?: ReactElement,
    label: string,
    size?:string,
    
    handler: ()=>void
}