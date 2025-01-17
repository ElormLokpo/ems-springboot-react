import { z } from "zod";

export const EmployeeSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email().min(1),
    phone: z.string().optional(),
    dateOfBirth: z.string(),
    gender: z.string(),
    countryOfResidence: z.string().min(1),
    cityOfResidence: z.string().optional(),
    digitalAddress: z.string().optional(),

    nationality: z.string().min(1),
    jobTitle: z.string().min(1),
    department: z.string().min(1),

    jobDescription: z.string().optional(),
    employeeType: z.string().optional(),
    hireDate: z.string().optional(),
    terminationDate: z.string().optional(),

    salaryAmount: z.string(),
    salaryCurrency: z.string(),
    salaryFrequency: z.string(),
    benefits: z.string().optional(),
    employeeStatus: z.string().optional(),

    supervisorName: z.string().optional(),
    supervisorEmail: z.string().optional(),

})

export const OrganizationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" })
})