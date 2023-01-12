import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

import './styles.scss';

// need only for autozoom )
const createRoutineMachineLayer = ({coords}) => {
  return L.Routing.control({
    waypoints: [
      L.latLng(...coords.from),
      L.latLng(...coords.target)
    ],
    lineOptions: {
      styles: [{ color: "#000", weight: 2 }]
    },
    waypointMode: function() {return null},
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    containerClassName: 'stats-menu',
    createMarker: function() { return null }
  });

  
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;