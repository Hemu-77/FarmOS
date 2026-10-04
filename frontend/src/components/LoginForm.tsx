"use client"

import { useState } from "react";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Spinner from "./ui/Spinner";
import Alert from "./ui/Alert";

export default function LoginForm(){

    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setError("");
        setSuccess("");
        setLoading(true)

        try{
            const response = await fetch(
                "http://localhost:8888/api/auth/signIn",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Login failed");
                return;
            }

            if (!data.token) {
                setError("Login succeeded but token was not received");
                return;
            }

            localStorage.setItem("token", data.token)

            setSuccess(data.message);
            setError("")
        }catch (error) {
            setError("Unable to connect to the server");
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    return(
        <form onSubmit={handleSubmit} className="min-h-screen flex bg-background items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-primary">FarmOS</h1>
                    <p className="text-sm text-muted">Smart Farm Management Platform</p>
                    <h2 className="text-xl font-semibold text-foreground mt-2">Login into your account</h2>

                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label>Email</label>
                    <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label>Password</label>
                    <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full"
                    />
                </div>
                <Button type="submit" className="mt-4 w-full" disabled={loading}>
                    { loading ? 
                    <>
                    <Spinner/> Logging in....
                    </> : "Log In"
                    }

                </Button>

                { error && <Alert variant="error">{error}</Alert> }

                { success && <Alert variant="success">{success}</Alert>}
            </Card>



        </form>
    )
}