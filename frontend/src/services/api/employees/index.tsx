import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";
import { API_ROUTES } from "@/constants";


export const  allEmployeesQuery = ()=>useQuery({
    queryKey:["employees"],
    queryFn: async ()=>(await axiosInstance.get(API_ROUTES.EMPLOYEES)).data
})