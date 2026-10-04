"use client"

import useMe from "@/hooks/useMe"
import Link from "next/link";
import { LayoutDashboard, Sprout, Map, Wheat, ClipboardList, ChartNoAxesCombined, Store, Bot } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar(){
    const {user,error, loading} = useMe();
    const items = [
        { id : 1,
          name : "Dashboard",
          link : "/dashboard",
          icons : LayoutDashboard
        },{
            id : 2,
           name : "Farms",
           link : "/farms",
           icons : Sprout
        },{
            id : 3,
            name : "Fields",
            link : "/fields",
            icons : Map
        } ,{
            id : 4,
            name : "Crops",
            link : "/crops" ,
            icons : Wheat
        },{
            id : 5,
            name : "Operations",
            link : "/operations",
            icons : ClipboardList
        },{
            id : 6,
            name : "Analytics",
            link : "/analytics",
            icons :  ChartNoAxesCombined
        } ,{
            id : 7,
            name : "Marketplace",
            link : "/marketplace",
            icons : Store
        } ,{
            id : 8,
            name : "AI Assistant",
            link : "/ai",
            icons : Bot
        }];

    const pathName = usePathname()

    return(
        <aside className="min-h-screen w-64 bg-primary text-white flex flex-col pl-4">
            <div className="mt-4">
                <h1 className="text-3xl">
                    <Link href='/useMe'>FarmOS</Link>
                </h1>
                <p className="text-sm text-white/70">Smart Farm Management</p>
            </div>
            <nav className="mt-8">
                {items.map((item) => {
                    const Icon = item.icons;
                    
                    return(
                        <Link key={item.id} href={item.link} className={`mt-4 flex items-center gap-3 rounded-md px-3 py-2 font-medium text-xl hover:bg-white/10 ${pathName === item.link ? "bg-white/20" : ""}`}>
                            <Icon/>{item.name} -&gt;
                        </Link>
                    )
                })}
            </nav>
            <div className="mt-auto mb-4">
                <h3 className="text-lg mt-16">{user?.name}</h3>
                <h3 className="text-lg text-muted">{user?.email}</h3>
                <button className="bg-background p-2 rounded-2xl text-danger">Logout</button>
            </div>



        </aside>
    )
}