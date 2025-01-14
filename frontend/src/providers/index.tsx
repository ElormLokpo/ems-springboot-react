import { router } from "@/routes";
import { RouterProvider } from "react-router-dom";
import { ModalProvider } from "./modal-provider";
import { QueryProvider } from "./query-provider";

export const RootProvider = () => {
    return <>
        <QueryProvider>
            <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
        </QueryProvider>

    </>
}