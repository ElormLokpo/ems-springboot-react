import { CButton } from "./components/button";
import { SearchInput } from "./components/input"
import { SummaryStatistics } from "./components/summary-stats"
import { FiSearch } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useContext, useState } from "react";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/type";
import { AddEmployeeForm } from "./components/form/add-employee";

export const EmployeePage = () => {
    const {setModalContent, setModalState} = useContext(ModalContext) as IModalContext;

    const handleAddEmployee = ()=>{
        setModalState(true);
        setModalContent(<AddEmployeeForm />);
    }


    return (
        <div className="p-10">
            <div className="mb-4">
                <p className="text-lg font-semibold">Employees</p>
                <p className="font-light text-sm">A list of all emplyees registered with the company.</p>
            </div>

            <div className="mb-10">
                <SummaryStatistics />
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <p className="font-semibold text-sm">All Employees</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-[25rem]">
                        <SearchInput icon={<FiSearch />} placeholder="Search employee" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <CButton style_type="outline" label="Filter" icon={<MdFilterList />} handler={()=>{}}/>
                        <CButton style_type="filled" label="Add" icon={<IoIosAdd />} handler={handleAddEmployee} />
                    </div>
                </div>
            </div>
        </div>
    )
}