import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "..";
import { API_ROUTES } from "@/constants";


export const createOrganizationMutation = () => useMutation({
    mutationKey: ["organization"],
    mutationFn: async (data: any) => axiosInstance.post(API_ROUTES.ORGANIZATION, data),
    onSuccess: (data) => {
        console.log("success", data)
    },
})