"use client"

import { useState, useEffect } from "react";

export default function useUserLocation(){

    const [location, setLocation] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        if(!navigator.geolocation){
            setError("Geolocation is not supported by the browser")
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude : position.coords.latitude,
                    longitude : position.coords.longitude
                })
            },
            (error) => {
                setError(error.message)
            }
        )
    },[]);

    return {location, error}
}