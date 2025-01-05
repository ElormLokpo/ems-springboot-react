import { ModalContainer } from "@/components/modal"
import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
    return (
        <div>
            <ModalContainer />
            <div className="grid grid-cols-14 gap-2 h-screen">
                <div className="col-span-2 border-r border-stone-800">
                    a
                </div>
                <div className="col-span-12">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}