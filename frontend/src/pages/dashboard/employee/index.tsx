import { CButton } from "../../../components/button";
import { SearchInput } from "../../../components/input"
import { SummaryStatistics } from "./components/summary-stats"
import { FiSearch } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import {  useEffect } from "react";

import { allEmployeesQuery } from "@/services/api/employees";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES, NAV_ROUTES } from "@/constants";

export const EmployeePage = () => {
    const  {data, isPending, isError, error} = allEmployeesQuery();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("FROM BACKEND",data)


    },[data])

    const handleAddEmployee = ()=>{
        navigate(NAV_ROUTES.EMPLOYEE_ADD_NAV);
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
                        <CButton style_type="filled" label="Add Employee" icon={<IoIosAdd />} handler={handleAddEmployee} />
                    </div>
                </div>
            </div>
        </div>
    )
}