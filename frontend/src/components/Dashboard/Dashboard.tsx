"use client"

import useMe from "@/hooks/useMe";

export default function DashBoardHeader(){
    const { user } = useMe();

    return(
        <div className="p-8 m-6 bg-surface rounded-xl shadow-sm border border-border">
            <h1 className="text-3xl font-black">Welcome Back! {user?.name}</h1>
            <p className="text-muted text-xl font-medium">Here's an overview of your farm operations.</p>
        </div>
    )
}