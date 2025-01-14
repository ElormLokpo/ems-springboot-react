import { IoIosAdd } from "react-icons/io"
import { CButton } from "../../../../../components/button"
import { CInput, CSelect, CTextArea } from "../../../../../components/input"
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { EmployeeSalaryFrequencyEnum, EmployeeTypeEnum } from "../../types";
import { EducationForm } from "./education-form";
import { useState } from "react";
import {} from "react-hook-form";

export const AddEmployeeForm = () => {
    const [educationArr, setEducationReqArr] = useState<any[]>([])
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

    let employeeTypeArr = Object.values(EmployeeTypeEnum)
        .map((item) => ({ value: item, display: item }))

    let employeeSalaryFrequencyArr = Object.values(EmployeeSalaryFrequencyEnum)
        .map((item) => ({ value: item, display: item }))

    return (

        <div className="bg-stone-900 grid grid-cols-2 gap-10 p-8">

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
                            <CInput label="Firstname" placeholder="Enter firstname" />
                            <CInput label="Lastname" placeholder="Enter lastname" />

                        </div>
                        <div className="mb-3">
                            <CInput label="Email" placeholder="someone@gmail.com" />
                        </div>



                        <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                            <CInput label="Date of birth" placeholder="" type="date" />
                            <CSelect label="Gender" optionsArr={[{ display: "Male", value: "M" }, { display: "Female", value: "F" }]} />
                        </div>

                        <div className="mb-3">
                            <CInput label="Phone number" placeholder="+233 55 4545" />
                        </div>

                        <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                            <CInput label="Country of Residence" placeholder="Country" type="text" />
                            <CInput label="City of Residence" placeholder="City" />
                        </div>

                        <div className="mb-3">
                            <CInput label="Digital address" placeholder="Eg. GM-23-1223" />
                        </div>

                        <div className="mb-3">
                            <CInput label="Nationality" placeholder="" />
                        </div>

                    </div>

                    <div className="mb-8">
                        <p className="text-xs mb-3 pb-2 border-b border-stone-600">Job Detail</p>


                        <div className="mb-3">
                            <CSelect label="Employee Type" optionsArr={employeeTypeArr} />
                        </div>

                        <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                            <CInput label="Hire date" type="date" />
                            <CInput label="Termination date" type="date" />
                        </div>


                        <div className="mb-3">
                            <CSelect label="Salary Frequency" optionsArr={employeeSalaryFrequencyArr} />
                        </div>

                        <div className="mb-3">
                            <CInput label="Benefits" placeholder="Kindly enter comma seperated values" />
                        </div>


                        <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                            <CInput label="Salary Currency" type="text" />
                            <CInput label="Salary Amount" type="number" />
                        </div>

                    </div>



                    <div className="mb-5">
                        <p className="text-xs pb-2 mb-3 border-b border-stone-600">Supervisor Details</p>


                        <div className="mb-3">
                            <CInput label="Supervisor Name" placeholder="Name of supervisor" />
                        </div>

                        <div className="mb-3">
                            <CInput label="Supervisor Email" placeholder="Email" type="email" />
                        </div>



                    </div>



                </div>
            </div>

            <div>
                <div className="mb-8">
                    <p className="text-xs mb-3 pb-2 border-b border-stone-600">Job Description</p>


                    <div className="mb-3">
                        <CInput label="Job title" placeholder="Hr Manager" />
                    </div>

                    <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                        <CInput label="Section" placeholder="Corp Comm" />
                        <CInput label="Department" placeholder="HR" />
                    </div>
                    <div className="mb-3">
                        <CTextArea label="Job Description" placeholder="A brief description about the job" />
                    </div>


                </div>



                <EducationForm setEducationReqArr={setEducationReqArr} />


                <div className="flex justify-end">
                    <CButton disabled={submitDisabled} label="Add Employee" icon={<FaUser />} style_type="filled" size="md" handler={() => { console.log(educationArr)}} />
                </div>

            </div>
        </div>

    )
}