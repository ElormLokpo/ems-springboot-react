import { ModalContext } from "@/context/modal-context"
import { IModalContext } from "@/context/modal-context/type"
import { useContext } from "react"

export const ModalContainer = ()=>{
    const {modalOpenState, modalContent, setModalState} = useContext(ModalContext) as IModalContext
    return(
        modalOpenState && <div onClick={()=>setModalState(false)} className="modal-container">
            {modalContent}
        </div>
    )
}