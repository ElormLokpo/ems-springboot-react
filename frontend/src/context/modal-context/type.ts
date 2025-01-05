import { ReactElement } from "react";

export interface IModalContext{
    modalOpenState: boolean, 
    modalContent: ReactElement,
    setModalState: (state:boolean)=>void;
    setModalContent:(content:ReactElement)=>void;
}