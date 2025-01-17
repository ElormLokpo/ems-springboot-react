import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";
import { API_ROUTES } from "@/constants";


export const  allEmployeesQuery = ()=>useQuery({
    queryKey:["employees"],
    queryFn: async ()=>(await axiosInstance.get(API_ROUTES.EMPLOYEES)).data
})

export const addEmployeeMutation = ()=>useMutation({
    mutationKey:["employees-add"],
    mutationFn: async (data:any)=> await axiosInstance.post(API_ROUTES.EMPLOYEES, data),
})