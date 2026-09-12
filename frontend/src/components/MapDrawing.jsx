"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapDrawing({ onGeometryCreated }) {
    const map = useMap();

    useEffect(() => {
        if (!map.pm) {
            console.error("Geoman is not attached to the map");
            return;
        }

        map.pm.addControls({
            position: "topleft",
            drawCircle: false,
            drawMarker: false,
            drawCircleMarker: false,
            drawPolyline: false,
            drawRectangle: false,
        });

        const handleCreate = (event) => {
            const geoJson = event.layer.toGeoJSON();

            onGeometryCreated(geoJson.geometry);
        };

        map.on("pm:create", handleCreate);

        return () => {
            map.off("pm:create", handleCreate);
            map.pm.removeControls();
        };
    }, [map, onGeometryCreated]);

    return null;
}