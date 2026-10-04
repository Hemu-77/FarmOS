import DashBoardLayout from "./Layout";
import DashBoardHeader from "@/components/Dashboard/Dashboard";
import SummaryCard from "@/components/Dashboard/SummaryCard";
import RecentFarms from "@/components/Dashboard/RecentFarms";
import CropOverview from "@/components/Dashboard/CropOverview";

export default function dashboard(){
    return(
        <DashBoardLayout>
            <DashBoardHeader/>
            <SummaryCard/>
            <div className="grid grid-cols-1 md:grid-cols-2 m-6 p-3 gap-3">
                <RecentFarms/>
                <CropOverview/>
            </div>
        </DashBoardLayout>
    )
}