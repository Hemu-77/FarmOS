"use client"

import { useEffect } from "react"
import {useMap } from "react-leaflet";

export default function MapController({ location }){
    const map = useMap();

    useEffect(() => {
        if(!location){
            return;
        }
    
        map.flyTo(
            [location.latitude, location.longitude],
            15
        )
    },[location, map])

    return null;
}