import { APP_ROUTES } from "@/constants";
import { RootLayout } from "@/layouts";
import { DashboardLayout } from "@/layouts/dashboard";
import { AuthPage } from "@/pages/auth";
import { DashboardPage } from "@/pages/dashboard";
import { EmployeePage } from "@/pages/dashboard/employee";
import { AddEmployeePage } from "@/pages/dashboard/employee/add-employee";
import { OrganizationPage } from "@/pages/organization";
import { createBrowserRouter, RouteObject } from "react-router-dom";


const dashoard_routes: RouteObject = {
    path: "dashboard", element: <DashboardLayout />, children: [
        { path: "", element: <DashboardPage /> },
        { path: APP_ROUTES.EMPLOYEES, element: <EmployeePage /> },
        { path: APP_ROUTES.EMPLOYEE_ADD, element: <AddEmployeePage /> },


    ]
}

export const main_routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: APP_ROUTES.AUTH, element: <AuthPage /> },
            {path: APP_ROUTES.ORGANIZATION, element: <OrganizationPage />},
            dashoard_routes
        ]
    }
];




export const router = createBrowserRouter([...main_routes])
