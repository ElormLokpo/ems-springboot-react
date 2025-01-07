import { RootLayout } from "@/layouts";
import { DashboardLayout } from "@/layouts/dashboard";
import { AuthPage } from "@/pages/auth";
import { DashboardPage } from "@/pages/dashboard";
import { EmployeePage } from "@/pages/dashboard/employee";
import { createBrowserRouter, RouteObject } from "react-router-dom";


const dashoard_routes:RouteObject =  {path:"dashboard", element:<DashboardLayout />, children:[
    {path:"", element:<DashboardPage />},
    {path:"employees", element: <EmployeePage />}
]}

export const main_routes:RouteObject[] = [
    {
        path:"/",
        element: <RootLayout />,
        children: [
            {path:"", element:<AuthPage />},
            dashoard_routes
        ]
    }
];




export const router = createBrowserRouter([...main_routes])
