import { FaUserFriends } from "react-icons/fa";

export const SummaryStatistics = () => {
    return (
        <div className="grid grid-cols-5 gap-2">
            {[1, 1, 1, 1, 1].map((_, key) => <SummaryCard key={key} />)}
        </div>
    )
}

const SummaryCard = () => {
    return <div className="p-4 border border-stone-700 rounded">

        <div className="flex mb-2 justify-between items-center text-xs">
            <p className="">
                Total Emploees
            </p>
            <p className=" p-2 text-emerald-500 rounded-full"><FaUserFriends /></p>
        </div>

        <p className="text-2xl font-bold">500</p>
    </div>
}