import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapComponent.css";

mapboxgl.accessToken = "your-mapbox-access-token";

const MapComponent = ({ latitude, longitude }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    return () => map.remove();
  }, [latitude, longitude]);

  return <div id="map" className="map-container"></div>;
};

export default MapComponent;
