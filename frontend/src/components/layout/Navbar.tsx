"use client"
import useMe from "@/hooks/useMe"
import { Bell } from "lucide-react"


export default function Navbar(){

    const {user} = useMe()



    return(
        <header className="bg-surface flex items-center justify-between border-b border-border px-6 py-4">
            <h2>Dashboard</h2>
            <div className="flex items-center mr-6 gap-4">
                <Bell className="text-yellow-400 hover:text-yellow-200"/>
                <span>Mr.{user?.name}</span>

            </div>

        </header>
    )
}