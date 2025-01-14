import { CButton } from "@/components/button"
import { CInput } from "@/components/input"
import { NAV_ROUTES } from "@/constants"
import { Link } from "react-router-dom"

export const OrganizationPage = () => {

  

    return (
        <div className="h-screen flex justify-center items-center bg-black text-stone-300">
            <div className="w-[35rem]">
                <form>
                    <p className="text-lg mb-1"><span className="font-semibold text-emerald-500">EMS</span> / Create Organization</p>
                    <p className="text-lg mb-4 text-xs">Kindly provide details of your organization below. </p>

                    <div className="mb-3">
                        <CInput label="Organization name" />
                    </div>

                 

                    
                    
                 

                    <div className="flex items-center gap-2">
                        <CButton size="md" style_type="outline outline-green" label="Create organization" handler={() => { }} />
                        <Link to={NAV_ROUTES.DASHBOARD_HOME} className="text-sm hover:underline">Skip this step</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}