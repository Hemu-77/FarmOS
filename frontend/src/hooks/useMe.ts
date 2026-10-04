"use client"

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";



export default function useMe(){

    const navigate = useRouter()

    type User = {
        name: string;
        email: string;
        gender: string;
    };


    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");





const fetchMe = async() => {
    try{

        setLoading(true)

        const token = localStorage.getItem("token");

        if(!token){
            navigate.push("/login");
            return;
        }


        const response = await fetch(
            "http://localhost:8888/api/auth/me",
            {
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
        )

        const data = await response.json();

        if (!response.ok) {
            setError(data.message || "Login failed");
            return;
        }

        setUser({name:data.name,"email":data.email,"gender":data.gender});
        setError("")
    }catch (error) {
        setError("Unable to connect to the server");
    } finally {
        setLoading(false);
    }

}

    useEffect(() => {
        fetchMe()
    },[])


    return {
        user,
        loading,error

    }
}