import { IoIosAdd } from "react-icons/io"
import { CButton } from "../button"
import { CInput, CTextArea } from "../input"
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const AddEmployeeForm = () => {
    return (
        <div className="w-screen h-screen flex justify-end">
            <div onClick={(e) => e.stopPropagation()} className="bg-stone-900 fixed overflow-y-auto h-screen w-[34rem] p-8">

                <div className="mb-8 flex justify-between items-center">
                    <div className="">
                        <p className="font-semibold">Add Employee</p>
                        <p className="text-sm font-light">Kindly fill details below to add employee.</p>
                    </div>

                    <div>
                        <button><IoMdClose /></button>
                    </div>
                </div>


                <div>
                    <form>
                        <div className="mb-10">
                            <p className="text-xs pb-2 border-b mb-2 border-stone-600">Personal Information</p>


                            <div className="mb-3">
                                <CInput label="Fullname" placeholder="Enter fullname" />
                            </div>

                            <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                                <CInput label="Date of birth" placeholder="Enter fullname" />
                                <CInput label="Place of birth" placeholder="Enter fullname" />
                            </div>
                            <div className="mb-3">
                                <CInput label="Email" placeholder="someone@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <CInput label="Phone number" placeholder="+233 55 4545" />
                            </div>

                        </div>

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



                        <div className="mb-5">
                            <p className="text-xs pb-2 mb-3 border-b border-stone-600">Eductaion</p>


                            <div className="mb-3">
                                <CInput label="Institution" placeholder="University of Ghana" />
                            </div>

                            <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                                <CInput label="Start Year" placeholder="2019" type="number" />
                                <CInput label="End Year" placeholder="2025" type="number" />
                            </div>

                            <div className="mb-3">
                                <CInput label="Course Name" placeholder="Bsc. Geography" />
                            </div>

                            <div>
                                <CButton label="Add Eductaion" icon={<IoIosAdd />} style_type="outline" handler={() => { }} />
                            </div>

                        </div>

                        <div className="flex justify-end">
                            <CButton label="Add Employee" icon={<FaUser />} style_type="filled" size="md" handler={() => { }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}