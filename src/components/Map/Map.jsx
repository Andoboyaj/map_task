import React, { useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import { selectedRequestSelector, pathDetailsSelector } from "../../redux/requestsList/selectors";

import Routing from "../RoutingMachine/RoutingMachine";
import {MapMarker} from '../MapMarker'

import "leaflet/dist/leaflet.css";
import "./styles.scss";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export function Map() {
  const selectedRow = useSelector(selectedRequestSelector);
  const pathDetails = useSelector(pathDetailsSelector);

  const center = useMemo(()=> selectedRow
  ? Object.values(selectedRow.coordFrom)
  : [59.84660399, 30.29496392], [selectedRow]);

  const coordTarget = useMemo(()=> selectedRow ? Object.values(selectedRow?.coordTarget) : [0,0],[selectedRow])

  return (
    <div className="map-wrapper">
      <MapContainer
        center={center}
        zoom={10}
        className='map-container'
        id="map"
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedRow ? (
          <div >
            <MapMarker center={center} />
            <MapMarker
              center={coordTarget}
              type="target"
            />
          </div>
        ) : null}

          {
            pathDetails ?
            <Polyline positions={pathDetails} color='#000' />
          : null
          }

        {
          selectedRow ?
          <Routing key={selectedRow.requestNumber} coords={{from: center, target: coordTarget} }  />
          : null
        } 

      </MapContainer>
    </div>
  );
}

