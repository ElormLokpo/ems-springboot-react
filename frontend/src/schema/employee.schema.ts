import {z} from "zod";

export const EmployeeSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email().min(1),
    countryOfResidence: z.string().min(1),
    nationality: z.string().min(1),
    jobTitle: z.string().min(1),  
    department: z.string().min(1)
})