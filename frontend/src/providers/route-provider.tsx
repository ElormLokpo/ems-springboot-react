import { createRouter, RouterProvider as RootRouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";

const router = createRouter({
    routeTree,
    defaultNotFoundComponent: () => <div>Not found</div>
})

declare module "@tanstack/react-router" {
    interface Register { router: typeof router }
}

export const RouterProvider = () => <RootRouterProvider router={router} />