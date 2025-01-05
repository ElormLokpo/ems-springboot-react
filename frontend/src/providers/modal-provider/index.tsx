import { ModalContext } from "@/context/modal-context"
import { ReactElement, useState } from "react"


export const ModalProvider = ({children}:{children:any})=>{
    const [modalOpenState, setModalState] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactElement>(<></>);


    
    return(
        <ModalContext.Provider value={{modalOpenState, setModalState, modalContent, setModalContent}}>
            {children}
        </ModalContext.Provider>
    )
}