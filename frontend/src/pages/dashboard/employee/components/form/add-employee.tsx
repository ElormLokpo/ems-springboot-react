
import { CInput, CSelect } from "../../../../../components/input"
import { EmployeeSalaryFrequencyEnum, EmployeeTypeEnum } from "../../types";
import { EducationForm } from "./education-form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchema } from "@/schema";
import { MdOutlinePersonAdd } from "react-icons/md";

export const AddEmployeeForm = () => {
    const [educationArr, setEducationReqArr] = useState<any[]>([])
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: zodResolver(EmployeeSchema)
    });

    useEffect(() => {
        console.log(errors)
    }, [errors])

    let employeeTypeArr = Object.values(EmployeeTypeEnum)
        .map((item) => ({ value: item, display: item }))

    let employeeSalaryFrequencyArr = Object.values(EmployeeSalaryFrequencyEnum)
        .map((item) => ({ value: item, display: item }))

    const handleSubmitForm = (data: any) => {
        console.log("employee Data", { ...data, education: educationArr, benefits: data.benefits.split(",") });
    }


    return (

        <div className="bg-stone-900  p-8">

            <form className="grid grid-cols-2 gap-10" onSubmit={handleSubmit(handleSubmitForm)}>
                <div>
                    <div className="mb-8 flex justify-between items-center">
                        <div className="">
                            <p className="font-semibold">Add Employee</p>
                            <p className="text-sm font-light">Kindly fill details below to add employee.</p>
                        </div>


                    </div>


                    <div>

                        <div className="mb-10">
                            <p className="text-xs pb-2 border-b mb-2 border-stone-600">Personal Information</p>


                            <div className="mb-3 grid grid-cols-2 gap-2">
                                <CInput register={register} errors={errors} name="firstName" label="Firstname" placeholder="Enter firstname" />
                                <CInput register={register} errors={errors} name="lastName" label="Lastname" placeholder="Enter lastname" />

                            </div>
                            <div className="mb-3">
                                <CInput register={register} errors={errors} name="email" label="Email" placeholder="someone@gmail.com" />
                            </div>



                            <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                                <CInput register={register} errors={errors} name="dateOfBirth" label="Date of birth" placeholder="" type="date" />
                                <CSelect register={register} errors={errors} name="gender" label="Gender" optionsArr={[{ display: "Male", value: "M" }, { display: "Female", value: "F" }]} />
                            </div>

                            <div className="mb-3">
                                <CInput register={register} errors={errors} name="phone" label="Phone number" placeholder="+233 55 4545" />
                            </div>

                            <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                                <CInput register={register} errors={errors} name="countryOfResidence" label="Country of Residence" placeholder="Country" type="text" />
                                <CInput register={register} errors={errors} name="cityOfResidence" label="City of Residence" placeholder="City" />
                            </div>

                            <div className="mb-3">
                                <CInput register={register} errors={errors} name="digitalAddress" label="Digital address" placeholder="Eg. GM-23-1223" />
                            </div>

                            <div className="mb-3">
                                <CInput register={register} errors={errors} name="nationality" label="Nationality" placeholder="" />
                            </div>

                        </div>

                        <div className="mb-8">
                            <p className="text-xs mb-3 pb-2 border-b border-stone-600">Job Detail</p>


                            <div className="mb-3">
                                <CSelect register={register} errors={errors} name="employeeType" label="Employee Type" optionsArr={employeeTypeArr} />
                            </div>

                            <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                                <CInput register={register} errors={errors} name="hireDate" label="Hire date" type="date" />
                                <CInput register={register} errors={errors} name="terminationDate" label="Termination date" type="date" />
                            </div>


                            <div className="mb-3">
                                <CSelect register={register} errors={errors} name="salaryFrequency" label="Salary Frequency" optionsArr={employeeSalaryFrequencyArr} />
                            </div>

                            <div className="mb-3">
                                <CInput register={register} errors={errors} name="benefits" label="Benefits" placeholder="Kindly enter comma seperated values" />
                            </div>


                            <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                                <CInput register={register} errors={errors} placeholder="eg.GHS" name="salaryCurrency" label="Salary Currency" type="text" />
                                <CInput register={register} errors={errors} name="salaryAmount" label="Salary Amount" type="number" />
                            </div>

                        </div>



                        <div className="mb-5">
                            <p className="text-xs pb-2 mb-3 border-b border-stone-600">Supervisor Details</p>


                            <div className="mb-3">
                                <CInput register={register} errors={errors} name="supervisorName" label="Supervisor Name" placeholder="Name of supervisor" />
                            </div>

                            <div className="mb-3">
                                <CInput register={register} errors={errors} name="supervisorEmail" label="Supervisor Email" placeholder="Email" type="email" />
                            </div>



                        </div>



                    </div>
                </div>

                <div>
                    <div className="mb-8">
                        <p className="text-xs mb-3 pb-2 border-b border-stone-600">Job Description</p>


                        <div className="mb-3">
                            <CInput register={register} errors={errors} name="jobTitle" label="Job title" placeholder="Eg.Hr Manager" />
                        </div>

                        <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                            <CInput register={register} errors={errors} name="section" label="Section" placeholder="Eg.Corp Comm" />
                            <CInput register={register} errors={errors} name="department" label="Department" placeholder="Eg.HR" />
                        </div>
                        <div className="mb-3">
                            <CInput register={register} errors={errors} name="jobDescription" isTextArea={true} label="Job Description" placeholder="A brief description about the job" />
                        </div>


                    </div>



                    <EducationForm setEducationReqArr={setEducationReqArr} />


                    <div className="flex justify-end">
                        <button className="text-xs px-4 py-2 rounded bg-emerald-500 flex gap-2 items-center" type="submit"> <MdOutlinePersonAdd /> Add Employee</button>
                    </div>

                </div>
            </form>
        </div>

    )
}