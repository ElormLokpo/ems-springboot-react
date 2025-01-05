import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"


export const RootLayout = () => {
    return <div>
        <Toaster />
        <Outlet />
    </div>
}