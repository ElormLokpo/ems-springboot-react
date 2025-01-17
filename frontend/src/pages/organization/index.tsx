import { CButton } from "@/components/button"
import { CInput } from "@/components/input"
import { NAV_ROUTES } from "@/constants"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { OrganizationSchema } from "@/schema";
import { createOrganizationMutation } from "@/services/api/organization";
import { toast } from "sonner";
import { pingQuery } from "@/services/api/ping";


export const OrganizationPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: zodResolver(OrganizationSchema)
    });

    const { mutate, isError, isPending } = createOrganizationMutation();
    const { data: pingData } = pingQuery()

    const handleSubmitForm = (data: any) => {
        mutate(data)

        console.log(pingData)

        if (!isError) {
            toast.success("Organization created successfully")
        } else {
            toast.error("Something went wrong ...")
        }

    }

    return (
        <div className="h-screen flex justify-center items-center bg-black text-stone-300">
            <div className="w-[35rem] ">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <p className="text-lg mb-1"><span className="font-semibold text-emerald-500">EMS</span> / Create Organization</p>
                    <p className="text-lg mb-4 text-xs">Kindly provide details of your organization below. </p>

                    <div className="mb-3">
                        <CInput label="Organization name" color="bg-stone-900" name="name" register={register} errors={errors} />
                    </div>


                    <div className="flex items-center gap-2">
                        <CButton size="md" style_type="outline outline-green" label="Create organization" isLoading={isPending} loadingText={"Creating organization..."} handler={() => { }} />
                        <Link to={NAV_ROUTES.DASHBOARD_HOME} className="text-sm hover:underline">Skip this step</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}