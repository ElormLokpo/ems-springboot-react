import { AuthPage } from "@/pages/auth";
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/test")({
    component: ()=> <AuthPage />
})