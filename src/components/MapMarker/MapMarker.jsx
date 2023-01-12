import React from "react";
import { Marker, Popup } from "react-leaflet";

export function MapMarker({ center, type }) {
  return (
    <div className="map-wrapper">
      <Marker position={center}>
        <Popup>{type === "target" ? "End Point" : "Start Point"}</Popup>
      </Marker>
    </div>
  );
}
