"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useUserLocation from "../hooks/useUserLocation";
import MapController from "./MapController";
import MapDrawing from "./MapDrawing";
import FieldForm from "./FieldForm";
import L from "leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/marker-icon-2x.png",
    iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png" 
})

export default function FieldMap() {
   
    const [geometry, setGeometry] = useState(null)

    const { location, error } = useUserLocation();

    console.log(" User location is :",location);
    console.log("Web error is :", error);
    


  return (
    <>
    <MapContainer
      center={[location?.latitude || 12.9716, location?.longitude || 77.5946]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController location={location}/>
      <MapDrawing onGeometryCreated={setGeometry}/>
      {console.log(geometry)}
      { location && 
        <Marker position={[ location.latitude, location.longitude]}>
            <Popup>
                You are <br/> here
            </Popup>
        </Marker>
      }
    </MapContainer>
    <FieldForm geometry={geometry}/>
    </>
  );
}