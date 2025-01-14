import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";
import { API_ROUTES } from "@/constants";


export const pingQuery = () => useQuery({
    queryKey: ["key"],
    queryFn: async () => (await axiosInstance.get(API_ROUTES.PING)).data
});