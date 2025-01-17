import { CBInput } from "@/components/input"
import { CButton } from "@/components/button"
import { IoIosAdd } from "react-icons/io"
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react"
import { IoIosCheckmark } from "react-icons/io";

interface EducationType {
    institution: string,
    startYear: string,
    endYear: string,
    course: string
}

export const EducationForm = ({ setEducationReqArr }: { setEducationReqArr: (educationArr: any[]) => void }) => {
    const [educationArr, setEducationArr] = useState<EducationType[]>([{
        institution: "",
        startYear: "",
        endYear: "",
        course: ""
    }])

    const handleInputChange = (key: number, e: React.ChangeEvent<HTMLInputElement>) => {
        let tempArr: any[] = [...educationArr]
        tempArr[key][`${e.target.name}`] = e.target.value;
        setEducationArr(tempArr);
    }

    const handleAddEducation = () => {
        if (educationArr[educationArr.length - 1].institution !== "") {
            setEducationArr((prev) => [...prev, { institution: "", startYear: "", endYear: "", course: "" }])
        }

    }

    const handleDeleteEducation = (key: number) => {
        setEducationArr(educationArr.filter((_, index) => index != key))

    }

    const handleDone = () => {
        setEducationReqArr(educationArr);
    }


    return (
        <div className="mb-5">
            <p className="text-xs pb-2 mb-3 border-b border-stone-600">Eductaion</p>

            {educationArr.map((item, key) => <div className="mb-8 border-b border-stone-700" key={key}>
                <div className="mb-3">
                    <CBInput label="Institution" name="institution" onChange={(e: any) => handleInputChange(key, e)} value={item.institution} placeholder="Eg.University of Ghana" />
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2 w-full">
                    <CBInput label="Start Year" name="startYear" value={item.startYear} placeholder="Eg.2019" onChange={(e: any) => handleInputChange(key, e)} />
                    <CBInput label="End Year" name="endYear" value={item.endYear} placeholder="Eg.2025" onChange={(e: any) => handleInputChange(key, e)} />
                </div>

                <div className="mb-6">
                    <CBInput label="Course Name" name="course" value={item.course} placeholder="Eg.Bsc. Geography" onChange={(e: any) => handleInputChange(key, e)} />
                </div>

                <div className="mb-3 flex justify-end">
                    <CButton label="Delete" icon={<IoCloseSharp />} style_type="outline outline-red" handler={() => handleDeleteEducation(key)} />
                </div>
            </div>)}

            <div className="mb-5 flex gap-2 items-center">
                <CButton label="Add Eductaion" icon={<IoIosAdd />} style_type="outline outline-def" handler={handleAddEducation} />
                <CButton label="Done" icon={<IoIosCheckmark />} style_type="outline outline-green" handler={handleDone} />

            </div>
        </div>
    )
}