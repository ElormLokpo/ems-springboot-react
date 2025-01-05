import { RootLayout } from "@/layouts";
import { AuthPage } from "@/pages/auth";
import { createBrowserRouter, RouteObject } from "react-router-dom";




export const main_routes:RouteObject[] = [
    {
        path:"/",
        element: <RootLayout />,
        children: [
            {path:"", element:<AuthPage />}
        ]
    }
];


export const router = createBrowserRouter([...main_routes])
