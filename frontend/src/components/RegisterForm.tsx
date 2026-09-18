"use client"

import { useState } from "react";
import type { FormEvent } from "react";
import Card from "./ui/Card";
import Input from "@/components/ui/Input";
import Button from "./ui/Button";
import Alert from "./ui/Alert";
import Spinner from "./ui/Spinner";

export default function RegisterForm(){

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
        gender : "Male"
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async(event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (formData.name.trim().length < 3) {
            setError("Name must be at least 3 characters");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email.trim())) {
        setError("Please enter a valid email");
        return;
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        if(formData.gender !== "Male" && formData.gender !== "Female"){
            setError("Inappropiate gender..");
            return;

        }

        setLoading(true);
        
        try {
            const response = await fetch(
                "http://localhost:8888/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
    
            const data = await response.json();
    
            if (!response.ok) {
                setError(data.message || "Registration failed");
                return;
            }
    
            setSuccess(data.message);
            setError("")
        } catch (error) {
            setError("Unable to connect to the server");
        } finally {
            setLoading(false);
        }
        
        
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })

    }



    return (
        <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center p-4 bg-background">
           <Card className="w-full max-w-md">

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-primary">FarmOS</h1>
                    <p className="text-sm text-muted">Smart Farm Management Platform</p>
                    <h2 className="text-xl font-semibold text-foreground mt-2">Create your account</h2>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                    <label>Name</label>
                    <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label>Email</label>
                    <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label>Password</label>
                    <Input 
                    type="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                        <label>Gender</label>
                        <select 
                        name="gender" 
                        value={formData.gender}
                        onChange={handleChange}
                        className="border border-border bg-surface text-foreground px-3 py-4 rounded-md focus:outline-none focus:ring-2 disabled:opacity-50"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                </div>
                <Button 
                type="submit" 
                className="mt-4 w-full"
                disabled={loading}
                > 
                    {loading ? (
                        <>
                            <Spinner/>
                            Creating Account...
                        </>
                    ) : "Create Account"}
                </Button>

                

                {error && <Alert variant="error">{error}</Alert>}

                {success && <Alert variant="success">{success}</Alert>}
           </Card>
           
        </form>
    )
}