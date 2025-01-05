import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"


export const RootLayout = () => {
    return <div className="bg-stone-900 h-screen text-stone-100">
        
        <Toaster />
        <Outlet />
    </div>
}